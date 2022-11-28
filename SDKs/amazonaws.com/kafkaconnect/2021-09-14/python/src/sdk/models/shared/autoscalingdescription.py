from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoScalingDescription:
    r"""AutoScalingDescription
    Information about the auto scaling parameters for the connector.
    """
    
    max_worker_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxWorkerCount') }})
    mcu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcuCount') }})
    min_worker_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minWorkerCount') }})
    scale_in_policy: Optional[ScaleInPolicyDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleInPolicy') }})
    scale_out_policy: Optional[ScaleOutPolicyDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleOutPolicy') }})
    
