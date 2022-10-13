from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import scaleinpolicyupdate
from . import scaleoutpolicyupdate


@dataclass_json
@dataclass
class AutoScalingUpdate:
    max_worker_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxWorkerCount' }})
    mcu_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mcuCount' }})
    min_worker_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minWorkerCount' }})
    scale_in_policy: scaleinpolicyupdate.ScaleInPolicyUpdate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleInPolicy' }})
    scale_out_policy: scaleoutpolicyupdate.ScaleOutPolicyUpdate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleOutPolicy' }})
    
