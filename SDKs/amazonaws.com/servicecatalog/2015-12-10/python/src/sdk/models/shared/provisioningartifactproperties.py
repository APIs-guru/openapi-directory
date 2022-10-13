from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import provisioningartifacttype_enum


@dataclass_json
@dataclass
class ProvisioningArtifactProperties:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    disable_template_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisableTemplateValidation' }})
    info: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Info' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    type: Optional[provisioningartifacttype_enum.ProvisioningArtifactTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
