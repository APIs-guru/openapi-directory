from dataclasses import dataclass, field
from typing import Optional
AIRTRAVEL_COORDINATES_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class AirtravelCoordinatesHeaders:
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': True }})
    

@dataclass
class AirtravelCoordinatesRequestBody:
    api_key_l1: str = field(default=None, metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = field(default=None, metadata={'form': { 'field_name': 'apiKey_l2' }})
    destination_airport_latitude: float = field(default=None, metadata={'form': { 'field_name': 'destination_airport_latitude' }})
    destination_airport_longitude: float = field(default=None, metadata={'form': { 'field_name': 'destination_airport_longitude' }})
    number_of_passengers: int = field(default=None, metadata={'form': { 'field_name': 'number_of_passengers' }})
    origin_airport_latitude: float = field(default=None, metadata={'form': { 'field_name': 'origin_airport_latitude' }})
    origin_airport_longitude: float = field(default=None, metadata={'form': { 'field_name': 'origin_airport_longitude' }})
    travel_class: str = field(default=None, metadata={'form': { 'field_name': 'travel_class' }})
    travel_mode: str = field(default=None, metadata={'form': { 'field_name': 'travel_mode' }})
    

@dataclass
class AirtravelCoordinatesRequest:
    server_url: Optional[str] = field(default=None)
    headers: AirtravelCoordinatesHeaders = field(default=None)
    request: Optional[AirtravelCoordinatesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class AirtravelCoordinatesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
