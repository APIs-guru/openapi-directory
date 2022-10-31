from dataclasses import dataclass, field
from typing import Optional
ECOMMERCE_DELIVERY_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class EcommerceDeliveryHeaders:
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class EcommerceDeliveryRequestBody:
    api_key_l1: str = field(default=None, metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = field(default=None, metadata={'form': { 'field_name': 'apiKey_l2' }})
    destination_airport_code: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'destination_airport_code' }})
    destination_latitude: float = field(default=None, metadata={'form': { 'field_name': 'destination_latitude' }})
    destination_longitude: float = field(default=None, metadata={'form': { 'field_name': 'destination_longitude' }})
    origin_airport_code: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'origin_airport_code' }})
    origin_latitude: float = field(default=None, metadata={'form': { 'field_name': 'origin_latitude' }})
    origin_longitude: float = field(default=None, metadata={'form': { 'field_name': 'origin_longitude' }})
    volumetric_weight: float = field(default=None, metadata={'form': { 'field_name': 'volumetric_weight' }})
    waybill_type: str = field(default=None, metadata={'form': { 'field_name': 'waybill_type' }})
    

@dataclass
class EcommerceDeliveryRequest:
    server_url: Optional[str] = field(default=None)
    headers: EcommerceDeliveryHeaders = field(default=None)
    request: Optional[EcommerceDeliveryRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class EcommerceDeliveryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
