from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShippingQuoteRequest:
    r"""ShippingQuoteRequest
    This complex type defines the request body for createShippingQuote. Sellers request a quote for a shipment by defining the &quot;To&quot; and &quot;From&quot; addresses for the package, plus the package's size. Carriers respond by offering up a &quot;rate&quot; for the service of theirs that best fits seller's needs.
    """
    
    orders: Optional[List[Order]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    package_specification: Optional[PackageSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageSpecification') }})
    ship_from: Optional[Contact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipFrom') }})
    ship_to: Optional[Contact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipTo') }})
    
