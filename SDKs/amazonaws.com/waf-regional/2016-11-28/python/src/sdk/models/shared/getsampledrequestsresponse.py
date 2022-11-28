from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetSampledRequestsResponse:
    population_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PopulationSize') }})
    sampled_requests: Optional[List[SampledHTTPRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampledRequests') }})
    time_window: Optional[TimeWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeWindow') }})
    
