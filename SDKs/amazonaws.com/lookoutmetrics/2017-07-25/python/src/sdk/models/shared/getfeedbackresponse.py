from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timeseriesfeedback


@dataclass_json
@dataclass
class GetFeedbackResponse:
    anomaly_group_time_series_feedback: Optional[List[timeseriesfeedback.TimeSeriesFeedback]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyGroupTimeSeriesFeedback' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
