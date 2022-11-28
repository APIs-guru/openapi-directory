from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Deposit:
    r"""Deposit
    A container that describes the details of a deposit. Used only with motor listings.
    """
    
    amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    due_in: Optional[TimeDuration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueIn') }})
    payment_methods: Optional[List[PaymentMethod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethods') }})
    
