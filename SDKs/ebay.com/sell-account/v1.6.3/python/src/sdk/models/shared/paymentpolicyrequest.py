from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PaymentPolicyRequest:
    r"""PaymentPolicyRequest
    This root container defines a seller's payment policy for a specific marketplace and category type. Used when creating or updating a payment policy, paymentPolicyRequest encapsulates a seller's terms for how buyers can pay for the items they buy. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies. A successful call returns a paymentPolicyId, plus the Location response header contains the URI to the resource. Policy instructions can be localized by providing a locale in the Content-Language HTTP request header. For example: Content-Language: de-DE. Tip: For more on using business policies, see eBay business policies.
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
    
