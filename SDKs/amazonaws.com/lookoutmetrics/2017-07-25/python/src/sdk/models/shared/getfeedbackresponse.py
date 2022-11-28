from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetFeedbackResponse:
    anomaly_group_time_series_feedback: Optional[List[TimeSeriesFeedback]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyGroupTimeSeriesFeedback') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
