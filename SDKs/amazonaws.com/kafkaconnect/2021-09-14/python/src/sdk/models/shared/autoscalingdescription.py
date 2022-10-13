from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import scaleinpolicydescription
from . import scaleoutpolicydescription


@dataclass_json
@dataclass
class AutoScalingDescription:
    max_worker_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxWorkerCount' }})
    mcu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mcuCount' }})
    min_worker_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minWorkerCount' }})
    scale_in_policy: Optional[scaleinpolicydescription.ScaleInPolicyDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleInPolicy' }})
    scale_out_policy: Optional[scaleoutpolicydescription.ScaleOutPolicyDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleOutPolicy' }})
    
