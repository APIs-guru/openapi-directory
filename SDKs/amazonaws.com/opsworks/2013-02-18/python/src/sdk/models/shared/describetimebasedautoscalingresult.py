from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeTimeBasedAutoScalingResult:
    r"""DescribeTimeBasedAutoScalingResult
    Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request.
    """
    
    time_based_auto_scaling_configurations: Optional[List[TimeBasedAutoScalingConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeBasedAutoScalingConfigurations') }})
    
