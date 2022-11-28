from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnomalyGroup:
    r"""AnomalyGroup
    A group of anomalous metrics
    """
    
    anomaly_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyGroupId') }})
    anomaly_group_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyGroupScore') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime') }})
    metric_level_impact_list: Optional[List[MetricLevelImpact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricLevelImpactList') }})
    primary_metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryMetricName') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime') }})
    
