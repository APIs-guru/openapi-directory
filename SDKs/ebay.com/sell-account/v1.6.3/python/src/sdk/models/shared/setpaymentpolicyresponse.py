from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetPaymentPolicyResponse:
    r"""SetPaymentPolicyResponse
    Complex type that that gets populated with a response containing a payment policy.
    """
    
    category_types: Optional[List[CategoryType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryTypes') }})
    deposit: Optional[Deposit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deposit') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    full_payment_due_in: Optional[TimeDuration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullPaymentDueIn') }})
    immediate_pay: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('immediatePay') }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    payment_instructions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentInstructions') }})
    payment_methods: Optional[List[PaymentMethod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethods') }})
    payment_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentPolicyId') }})
    warnings: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
