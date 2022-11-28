from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProvisioningArtifactProperties:
    r"""ProvisioningArtifactProperties
    Information about a provisioning artifact (also known as a version) for a product.
    """
    
    info: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Info') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    disable_template_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisableTemplateValidation') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: Optional[ProvisioningArtifactTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
