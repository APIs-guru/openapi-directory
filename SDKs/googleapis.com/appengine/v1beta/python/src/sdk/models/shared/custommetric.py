from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomMetric:
    r"""CustomMetric
    Allows autoscaling based on Stackdriver metrics.
    """
    
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    single_instance_assignment: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleInstanceAssignment') }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetType') }})
    target_utilization: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetUtilization') }})
    
