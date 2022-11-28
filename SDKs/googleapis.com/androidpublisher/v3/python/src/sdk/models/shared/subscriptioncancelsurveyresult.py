from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubscriptionCancelSurveyResult:
    r"""SubscriptionCancelSurveyResult
    Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
    """
    
    cancel_survey_reason: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelSurveyReason') }})
    user_input_cancel_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInputCancelReason') }})
    
