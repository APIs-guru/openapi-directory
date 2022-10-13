from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import scaleinpolicy
from . import scaleoutpolicy


@dataclass_json
@dataclass
class AutoScaling:
    max_worker_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxWorkerCount' }})
    mcu_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mcuCount' }})
    min_worker_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minWorkerCount' }})
    scale_in_policy: Optional[scaleinpolicy.ScaleInPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleInPolicy' }})
    scale_out_policy: Optional[scaleoutpolicy.ScaleOutPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleOutPolicy' }})
    
