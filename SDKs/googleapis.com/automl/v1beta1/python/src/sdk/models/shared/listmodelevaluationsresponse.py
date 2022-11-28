from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListModelEvaluationsResponse:
    r"""ListModelEvaluationsResponse
    Response message for AutoMl.ListModelEvaluations.
    """
    
    model_evaluation: Optional[List[ModelEvaluation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelEvaluation') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
