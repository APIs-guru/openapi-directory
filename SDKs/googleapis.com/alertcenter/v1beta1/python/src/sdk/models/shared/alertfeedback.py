from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AlertFeedbackTypeEnum(str, Enum):
    ALERT_FEEDBACK_TYPE_UNSPECIFIED = "ALERT_FEEDBACK_TYPE_UNSPECIFIED"
    NOT_USEFUL = "NOT_USEFUL"
    SOMEWHAT_USEFUL = "SOMEWHAT_USEFUL"
    VERY_USEFUL = "VERY_USEFUL"


@dataclass_json
@dataclass
class AlertFeedback:
    r"""AlertFeedback
    A customer feedback about an alert.
    """
    
    alert_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertId') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    feedback_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedbackId') }})
    type: Optional[AlertFeedbackTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
