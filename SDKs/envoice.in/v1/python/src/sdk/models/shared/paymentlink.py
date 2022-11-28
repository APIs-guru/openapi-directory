from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PaymentLink:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    client: Optional[Client] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Client') }})
    client_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    currency: Optional[Currency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrencyId') }})
    discount_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DiscountAmount') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    invoice: Optional[Invoice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Invoice') }})
    items: Optional[List[PaymentLinkItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Number') }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubTotalAmount') }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxAmount') }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalAmount') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    
