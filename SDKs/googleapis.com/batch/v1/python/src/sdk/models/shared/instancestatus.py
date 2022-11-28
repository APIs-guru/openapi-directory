from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InstanceStatusProvisioningModelEnum(str, Enum):
    PROVISIONING_MODEL_UNSPECIFIED = "PROVISIONING_MODEL_UNSPECIFIED"
    STANDARD = "STANDARD"
    SPOT = "SPOT"
    PREEMPTIBLE = "PREEMPTIBLE"


@dataclass_json
@dataclass
class InstanceStatus:
    r"""InstanceStatus
    VM instance status.
    """
    
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    provisioning_model: Optional[InstanceStatusProvisioningModelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningModel') }})
    task_pack: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskPack') }})
    
