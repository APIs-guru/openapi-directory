from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShippingQuote:
    r"""ShippingQuote
    This complex type describes a &quot;shipping quote,&quot; which contains the parameters for a package shipment. The shipping quote contains a list of &quot;live quotes&quot; or rates for the shipment. Rates are offerd by a carrier for a particular service, of set of services, for shipping the package. Included in the shipping quote are the package specifications, the shipment's origin and destination addresses, and the shipping parameters specified by the seller. Use the rateId value to select the specific service you want when you create a shipment by calling createFromShippingQuote.
    """
    
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate') }})
    orders: Optional[List[Order]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    package_specification: Optional[PackageSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageSpecification') }})
    rates: Optional[List[Rate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rates') }})
    ship_from: Optional[Contact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipFrom') }})
    ship_to: Optional[Contact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipTo') }})
    shipping_quote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingQuoteId') }})
    warnings: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
