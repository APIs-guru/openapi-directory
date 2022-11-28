from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShippingOption:
    r"""ShippingOption
    This complex type defines a seller's shipping configuration for either a DOMESTIC or INTERNATIONAL shipping option. Shipping options configure the high-level settings for shipments, such as flat-rate or calculated shipping, and any rate tables the seller wants to associate with the policy. Each shippingOption element has a shippingServices container that defines the list of shipping carriers and services that are available for the parent shipping option (that is, for either DOMESTIC or INTERNATIONAL shipping). If a seller offers an international shipping option, they must also offer a domestic shipping option. Note that costType (FLAT_RATE or CALCULATED) is set in shippingOptions and that all associated shipping services must be able to support this cost type.
    """
    
    cost_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costType') }})
    insurance_fee: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insuranceFee') }})
    insurance_offered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insuranceOffered') }})
    option_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optionType') }})
    package_handling_cost: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageHandlingCost') }})
    rate_table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateTableId') }})
    shipping_services: Optional[List[ShippingService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingServices') }})
    
