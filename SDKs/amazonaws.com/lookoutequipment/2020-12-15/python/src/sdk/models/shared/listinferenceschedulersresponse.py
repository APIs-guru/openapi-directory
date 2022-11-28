from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListInferenceSchedulersResponse:
    inference_scheduler_summaries: Optional[List[InferenceSchedulerSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
