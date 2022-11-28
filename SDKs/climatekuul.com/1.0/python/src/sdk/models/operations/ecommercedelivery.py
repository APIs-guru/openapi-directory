from dataclasses import dataclass, field
from typing import Optional


ECOMMERCE_DELIVERY_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class EcommerceDeliveryHeaders:
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class EcommerceDeliveryRequestBody:
    api_key_l1: str = field(metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = field(metadata={'form': { 'field_name': 'apiKey_l2' }})
    destination_latitude: float = field(metadata={'form': { 'field_name': 'destination_latitude' }})
    destination_longitude: float = field(metadata={'form': { 'field_name': 'destination_longitude' }})
    origin_latitude: float = field(metadata={'form': { 'field_name': 'origin_latitude' }})
    origin_longitude: float = field(metadata={'form': { 'field_name': 'origin_longitude' }})
    volumetric_weight: float = field(metadata={'form': { 'field_name': 'volumetric_weight' }})
    waybill_type: str = field(metadata={'form': { 'field_name': 'waybill_type' }})
    destination_airport_code: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'destination_airport_code' }})
    origin_airport_code: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'origin_airport_code' }})
    

@dataclass
class EcommerceDeliveryRequest:
    headers: EcommerceDeliveryHeaders = field()
    request: Optional[EcommerceDeliveryRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class EcommerceDeliveryResponse:
    content_type: str = field()
    status_code: int = field()
    
