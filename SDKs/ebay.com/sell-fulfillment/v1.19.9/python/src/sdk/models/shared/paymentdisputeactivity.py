from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PaymentDisputeActivity:
    r"""PaymentDisputeActivity
    This type is used by each recorded activity on a payment dispute, from creation to resolution.
    """
    
    activity_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityDate') }})
    activity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    actor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    
