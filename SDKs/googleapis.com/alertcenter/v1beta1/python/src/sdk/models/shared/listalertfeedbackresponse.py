from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alertfeedback


@dataclass_json
@dataclass
class ListAlertFeedbackResponse:
    feedback: Optional[List[alertfeedback.AlertFeedback]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedback' }})
    
