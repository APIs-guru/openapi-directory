from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import additionaloption
from . import amount
from . import pickupslot


@dataclass_json
@dataclass
class Rate:
    additional_options: Optional[List[additionaloption.AdditionalOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalOptions' }})
    base_shipping_cost: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseShippingCost' }})
    destination_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationTimeZone' }})
    max_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxEstimatedDeliveryDate' }})
    min_estimated_delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minEstimatedDeliveryDate' }})
    pickup_networks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupNetworks' }})
    pickup_slots: Optional[List[pickupslot.PickupSlot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupSlots' }})
    pickup_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupType' }})
    rate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateId' }})
    rate_recommendation: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateRecommendation' }})
    shipping_carrier_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCarrierCode' }})
    shipping_carrier_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCarrierName' }})
    shipping_service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingServiceCode' }})
    shipping_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingServiceName' }})
    
