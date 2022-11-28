from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserInitiatedCancellation:
    r"""UserInitiatedCancellation
    Information specific to cancellations initiated by users.
    """
    
    cancel_survey_result: Optional[CancelSurveyResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelSurveyResult') }})
    cancel_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelTime') }})
    
