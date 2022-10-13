from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimeSeriesFeedback:
    is_anomaly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsAnomaly' }})
    time_series_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeSeriesId' }})
    
