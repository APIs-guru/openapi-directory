from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount
from . import amount
from . import regionset
from . import amount
from . import amount


@dataclass_json
@dataclass
class ShippingService:
    additional_shipping_cost: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalShippingCost' }})
    buyer_responsible_for_pickup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerResponsibleForPickup' }})
    buyer_responsible_for_shipping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerResponsibleForShipping' }})
    cash_on_delivery_fee: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cashOnDeliveryFee' }})
    free_shipping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeShipping' }})
    ship_to_locations: Optional[regionset.RegionSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipToLocations' }})
    shipping_carrier_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCarrierCode' }})
    shipping_cost: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCost' }})
    shipping_service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingServiceCode' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    surcharge: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surcharge' }})
    
