from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateEnvironmentInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    spec: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    template_major_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateMajorVersion') }})
    template_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environment_account_connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentAccountConnectionId') }})
    proton_service_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protonServiceRoleArn') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    template_minor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateMinorVersion') }})
    
