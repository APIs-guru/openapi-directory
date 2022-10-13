from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timerange


@dataclass_json
@dataclass
class ListEngagementsRequest:
    incident_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncidentId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    time_range_value: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeRangeValue' }})
    
