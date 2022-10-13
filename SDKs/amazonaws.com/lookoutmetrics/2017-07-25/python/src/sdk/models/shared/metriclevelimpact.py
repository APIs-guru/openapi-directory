from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import contributionmatrix


@dataclass_json
@dataclass
class MetricLevelImpact:
    contribution_matrix: Optional[contributionmatrix.ContributionMatrix] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContributionMatrix' }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    num_time_series: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumTimeSeries' }})
    
