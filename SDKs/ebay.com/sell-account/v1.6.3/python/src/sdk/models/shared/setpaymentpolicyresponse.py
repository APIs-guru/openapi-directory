from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import categorytype
from . import deposit
from . import timeduration
from . import paymentmethod
from . import error


@dataclass_json
@dataclass
class SetPaymentPolicyResponse:
    category_types: Optional[List[categorytype.CategoryType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryTypes' }})
    deposit: Optional[deposit.Deposit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deposit' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    full_payment_due_in: Optional[timeduration.TimeDuration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullPaymentDueIn' }})
    immediate_pay: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'immediatePay' }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketplaceId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    payment_instructions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentInstructions' }})
    payment_methods: Optional[List[paymentmethod.PaymentMethod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMethods' }})
    payment_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentPolicyId' }})
    warnings: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
