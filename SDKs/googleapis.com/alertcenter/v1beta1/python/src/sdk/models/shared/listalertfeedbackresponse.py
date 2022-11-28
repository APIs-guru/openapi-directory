from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAlertFeedbackResponse:
    r"""ListAlertFeedbackResponse
    Response message for an alert feedback listing request.
    """
    
    feedback: Optional[List[AlertFeedback]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    
