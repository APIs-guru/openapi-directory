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
class MonetaryTransaction:
    r"""MonetaryTransaction
    This type is used to provide details about one or more monetary transactions that occur as part of a payment dispute.
    """
    
    amount: Optional[DisputeAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
