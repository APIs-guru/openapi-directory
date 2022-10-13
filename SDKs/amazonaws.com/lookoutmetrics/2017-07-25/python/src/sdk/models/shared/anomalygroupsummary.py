from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AnomalyGroupSummary:
    anomaly_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyGroupId' }})
    anomaly_group_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyGroupScore' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime' }})
    primary_metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryMetricName' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime' }})
    
