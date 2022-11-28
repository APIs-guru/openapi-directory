from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SubscriptionCancelSurveyResult:
    r"""SubscriptionCancelSurveyResult
    Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
    """
    
    cancel_survey_reason: Optional[int] = field(default=None)
    user_input_cancel_reason: Optional[str] = field(default=None)
    
