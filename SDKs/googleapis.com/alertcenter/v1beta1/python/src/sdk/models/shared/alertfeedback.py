from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AlertFeedbackTypeEnum(str, Enum):
    ALERT_FEEDBACK_TYPE_UNSPECIFIED = "ALERT_FEEDBACK_TYPE_UNSPECIFIED"
    NOT_USEFUL = "NOT_USEFUL"
    SOMEWHAT_USEFUL = "SOMEWHAT_USEFUL"
    VERY_USEFUL = "VERY_USEFUL"


@dataclass_json
@dataclass
class AlertFeedback:
    alert_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertId' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    feedback_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedbackId' }})
    type: Optional[AlertFeedbackTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
