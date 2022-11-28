from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PaymentPolicy:
    r"""PaymentPolicy
    Root container that defines the fields for a seller's payment policy. The paymentPolicy encapsulates a seller's payment terms and consists of payment details for the seller, the name and description of the policy, and the marketplace and category group(s) covered by the payment policy. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies.
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
    
