from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import order
from . import packagespecification
from . import contact
from . import contact


@dataclass_json
@dataclass
class ShippingQuoteRequest:
    orders: Optional[List[order.Order]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orders' }})
    package_specification: Optional[packagespecification.PackageSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageSpecification' }})
    ship_from: Optional[contact.Contact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipFrom' }})
    ship_to: Optional[contact.Contact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipTo' }})
    
