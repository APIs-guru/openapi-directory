from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetricLevelImpact:
    r"""MetricLevelImpact
    Details about a measure affected by an anomaly.
    """
    
    contribution_matrix: Optional[ContributionMatrix] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContributionMatrix') }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    num_time_series: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumTimeSeries') }})
    
