from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PaymentMethod:
    r"""PaymentMethod
    Container specifying a payment method that is accepted by the seller. Specify multiple payment methods by repeating this container. For more on payment methods, see Accepted payments policy. Note that payment methods are not applicable to classified ad listings &ndash; all classified ad payments are handled off of the eBay platform.
    """
    
    brands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brands') }})
    payment_method_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethodType') }})
    recipient_account_reference: Optional[RecipientAccountReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipientAccountReference') }})
    
