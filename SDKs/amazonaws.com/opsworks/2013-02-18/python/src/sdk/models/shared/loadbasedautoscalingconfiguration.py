from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LoadBasedAutoScalingConfiguration:
    r"""LoadBasedAutoScalingConfiguration
    Describes a layer's load-based auto scaling configuration.
    """
    
    down_scaling: Optional[AutoScalingThresholds] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DownScaling') }})
    enable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enable') }})
    layer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerId') }})
    up_scaling: Optional[AutoScalingThresholds] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpScaling') }})
    
