from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import choicereason_enum
from . import choicestatus_enum


@dataclass_json
@dataclass
class ChoiceAnswerSummary:
    choice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChoiceId' }})
    reason: Optional[choicereason_enum.ChoiceReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reason' }})
    status: Optional[choicestatus_enum.ChoiceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
