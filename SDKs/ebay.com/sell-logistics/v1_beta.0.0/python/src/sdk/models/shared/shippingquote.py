from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import order
from . import packagespecification
from . import rate
from . import contact
from . import contact
from . import error


@dataclass_json
@dataclass
class ShippingQuote:
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate' }})
    expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate' }})
    orders: Optional[List[order.Order]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orders' }})
    package_specification: Optional[packagespecification.PackageSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageSpecification' }})
    rates: Optional[List[rate.Rate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rates' }})
    ship_from: Optional[contact.Contact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipFrom' }})
    ship_to: Optional[contact.Contact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipTo' }})
    shipping_quote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingQuoteId' }})
    warnings: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
