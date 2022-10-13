from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubscriptionCancelSurveyResult:
    cancel_survey_reason: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelSurveyReason' }})
    user_input_cancel_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInputCancelReason' }})
    
