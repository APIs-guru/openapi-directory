from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LineItemRefund:
    r"""LineItemRefund
    This type contains refund information for a line item.
    """
    
    amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    refund_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundDate') }})
    refund_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundId') }})
    refund_reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundReferenceId') }})
    
