from dataclasses import dataclass, field
from typing import Optional
URBAN_DELIVERY_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class UrbanDeliveryRequestBody:
    api_key_l1: str = field(default=None, metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = field(default=None, metadata={'form': { 'field_name': 'apiKey_l2' }})
    destination_latitude: float = field(default=None, metadata={'form': { 'field_name': 'destination_latitude' }})
    destination_longitude: float = field(default=None, metadata={'form': { 'field_name': 'destination_longitude' }})
    item_count: int = field(default=None, metadata={'form': { 'field_name': 'item_count' }})
    origin_latitude: float = field(default=None, metadata={'form': { 'field_name': 'origin_latitude' }})
    origin_longitude: float = field(default=None, metadata={'form': { 'field_name': 'origin_longitude' }})
    vehicle_type: str = field(default=None, metadata={'form': { 'field_name': 'vehicle_type' }})
    

@dataclass
class UrbanDeliveryRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[UrbanDeliveryRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UrbanDeliveryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
