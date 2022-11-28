from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InstancePolicyProvisioningModelEnum(str, Enum):
    PROVISIONING_MODEL_UNSPECIFIED = "PROVISIONING_MODEL_UNSPECIFIED"
    STANDARD = "STANDARD"
    SPOT = "SPOT"
    PREEMPTIBLE = "PREEMPTIBLE"


@dataclass_json
@dataclass
class InstancePolicy:
    r"""InstancePolicy
    InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy.
    """
    
    accelerators: Optional[List[Accelerator]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelerators') }})
    disks: Optional[List[AttachedDisk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disks') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    min_cpu_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minCpuPlatform') }})
    provisioning_model: Optional[InstancePolicyProvisioningModelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningModel') }})
    
