from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recipientaccountreference


@dataclass_json
@dataclass
class PaymentMethod:
    brands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brands' }})
    payment_method_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMethodType' }})
    recipient_account_reference: Optional[recipientaccountreference.RecipientAccountReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipientAccountReference' }})
    
