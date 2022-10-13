from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cancelsurveyresult


@dataclass_json
@dataclass
class UserInitiatedCancellation:
    cancel_survey_result: Optional[cancelsurveyresult.CancelSurveyResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelSurveyResult' }})
    cancel_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelTime' }})
    
