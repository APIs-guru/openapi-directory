from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItvPurchaseWithOfferResponse:
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    intent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentId') }})
    intent_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentType') }})
    payment_method_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethodId') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    
