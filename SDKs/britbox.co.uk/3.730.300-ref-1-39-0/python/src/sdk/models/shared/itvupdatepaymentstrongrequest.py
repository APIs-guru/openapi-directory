from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItvUpdatePaymentStrongRequest:
    profile_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileToken') }})
    payment_method_from_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethodFromToken') }})
    payment_method_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethodId') }})
    
