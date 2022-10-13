from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import provisioningconfig


@dataclass_json
@dataclass
class SubmitProvisioningConfigRequest:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    provisioning_config: Optional[provisioningconfig.ProvisioningConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisioningConfig' }})
    
