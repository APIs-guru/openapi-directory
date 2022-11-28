from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoScalingUpdate:
    r"""AutoScalingUpdate
    The updates to the auto scaling parameters for the connector.
    """
    
    max_worker_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxWorkerCount') }})
    mcu_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcuCount') }})
    min_worker_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minWorkerCount') }})
    scale_in_policy: ScaleInPolicyUpdate = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleInPolicy') }})
    scale_out_policy: ScaleOutPolicyUpdate = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleOutPolicy') }})
    
