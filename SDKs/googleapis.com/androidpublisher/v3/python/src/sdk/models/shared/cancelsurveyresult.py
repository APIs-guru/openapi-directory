from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CancelSurveyResultReasonEnum(str, Enum):
    CANCEL_SURVEY_REASON_UNSPECIFIED = "CANCEL_SURVEY_REASON_UNSPECIFIED"
    CANCEL_SURVEY_REASON_NOT_ENOUGH_USAGE = "CANCEL_SURVEY_REASON_NOT_ENOUGH_USAGE"
    CANCEL_SURVEY_REASON_TECHNICAL_ISSUES = "CANCEL_SURVEY_REASON_TECHNICAL_ISSUES"
    CANCEL_SURVEY_REASON_COST_RELATED = "CANCEL_SURVEY_REASON_COST_RELATED"
    CANCEL_SURVEY_REASON_FOUND_BETTER_APP = "CANCEL_SURVEY_REASON_FOUND_BETTER_APP"
    CANCEL_SURVEY_REASON_OTHERS = "CANCEL_SURVEY_REASON_OTHERS"


@dataclass_json
@dataclass
class CancelSurveyResult:
    reason: Optional[CancelSurveyResultReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    reason_user_input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonUserInput' }})
    
