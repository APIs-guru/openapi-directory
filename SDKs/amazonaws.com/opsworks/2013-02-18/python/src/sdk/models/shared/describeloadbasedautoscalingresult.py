from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import loadbasedautoscalingconfiguration


@dataclass_json
@dataclass
class DescribeLoadBasedAutoScalingResult:
    load_based_auto_scaling_configurations: Optional[List[loadbasedautoscalingconfiguration.LoadBasedAutoScalingConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoadBasedAutoScalingConfigurations' }})
    
