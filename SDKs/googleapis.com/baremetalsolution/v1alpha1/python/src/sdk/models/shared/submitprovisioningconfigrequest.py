from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubmitProvisioningConfigRequest:
    r"""SubmitProvisioningConfigRequest
    Request for SubmitProvisioningConfig.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    provisioning_config: Optional[ProvisioningConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningConfig') }})
    
