from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateServiceTemplateInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    pipeline_provisioning: Optional[ProvisioningEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineProvisioning') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
