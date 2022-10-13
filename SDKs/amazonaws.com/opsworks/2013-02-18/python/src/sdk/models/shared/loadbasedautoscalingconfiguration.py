from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import autoscalingthresholds
from . import autoscalingthresholds


@dataclass_json
@dataclass
class LoadBasedAutoScalingConfiguration:
    down_scaling: Optional[autoscalingthresholds.AutoScalingThresholds] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DownScaling' }})
    enable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enable' }})
    layer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LayerId' }})
    up_scaling: Optional[autoscalingthresholds.AutoScalingThresholds] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpScaling' }})
    
