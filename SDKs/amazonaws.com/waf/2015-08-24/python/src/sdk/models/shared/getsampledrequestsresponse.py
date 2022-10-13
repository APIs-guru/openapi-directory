from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sampledhttprequest
from . import timewindow


@dataclass_json
@dataclass
class GetSampledRequestsResponse:
    population_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PopulationSize' }})
    sampled_requests: Optional[List[sampledhttprequest.SampledHTTPRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SampledRequests' }})
    time_window: Optional[timewindow.TimeWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeWindow' }})
    
