from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListInferenceExecutionsResponse:
    inference_execution_summaries: Optional[List[InferenceExecutionSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceExecutionSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
