from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShippingDetails:
    r"""ShippingDetails
    A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.
    """
    
    inbound_shipment: Optional[Shipment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InboundShipment') }})
    outbound_shipment: Optional[Shipment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutboundShipment') }})
    shipping_option: Optional[ShippingOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingOption') }})
    
