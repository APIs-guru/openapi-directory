from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoScaling:
    r"""AutoScaling
    Specifies how the connector scales.
    """
    
    max_worker_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxWorkerCount') }})
    mcu_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcuCount') }})
    min_worker_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minWorkerCount') }})
    scale_in_policy: Optional[ScaleInPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleInPolicy') }})
    scale_out_policy: Optional[ScaleOutPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleOutPolicy') }})
    
