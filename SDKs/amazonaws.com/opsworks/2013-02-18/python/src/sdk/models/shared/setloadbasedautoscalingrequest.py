from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetLoadBasedAutoScalingRequest:
    layer_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerId') }})
    down_scaling: Optional[AutoScalingThresholds] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DownScaling') }})
    enable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enable') }})
    up_scaling: Optional[AutoScalingThresholds] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpScaling') }})
    
