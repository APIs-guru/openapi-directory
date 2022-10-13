from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import additionaloption
from . import amount
from . import amount


@dataclass_json
@dataclass
class PurchasedRate:
    additional_options: Optional[List[additionaloption.AdditionalOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalOptions' }})
    base_shipping_cost: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseShippingCost' }})
    destination_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationTimeZone' }})
    max_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxEstimatedDeliveryDate' }})
    min_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minEstimatedDeliveryDate' }})
    pickup_networks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupNetworks' }})
    pickup_slot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupSlotId' }})
    pickup_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupType' }})
    rate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateId' }})
    shipping_carrier_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCarrierCode' }})
    shipping_carrier_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCarrierName' }})
    shipping_quote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingQuoteId' }})
    shipping_service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingServiceCode' }})
    shipping_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingServiceName' }})
    total_shipping_cost: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalShippingCost' }})
    
