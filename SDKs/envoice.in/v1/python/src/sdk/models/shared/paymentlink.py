from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import client
from . import currency
from . import invoice
from . import paymentlinkitem
from . import user


@dataclass_json
@dataclass
class PaymentLink:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    client: Optional[client.Client] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Client' }})
    client_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    currency: Optional[currency.Currency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrencyId' }})
    discount_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiscountAmount' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    invoice: Optional[invoice.Invoice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Invoice' }})
    items: Optional[List[paymentlinkitem.PaymentLinkItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Number' }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubTotalAmount' }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxAmount' }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalAmount' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'User' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    
