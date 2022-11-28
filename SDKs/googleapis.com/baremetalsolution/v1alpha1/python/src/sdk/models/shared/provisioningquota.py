from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProvisioningQuota:
    r"""ProvisioningQuota
    A provisioning quota for a given project.
    """
    
    instance_quota: Optional[InstanceQuota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceQuota') }})
    
