from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Payment:
    r"""Payment
    This type is used to provide details about the seller payments for an order.
    """
    
    amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    payment_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentDate') }})
    payment_holds: Optional[List[PaymentHold]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentHolds') }})
    payment_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethod') }})
    payment_reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentReferenceId') }})
    payment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentStatus') }})
    
