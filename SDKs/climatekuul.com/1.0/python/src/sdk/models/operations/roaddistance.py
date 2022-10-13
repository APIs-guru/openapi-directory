from dataclasses import dataclass, field
from typing import Optional
ROAD_DISTANCE_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class RoadDistanceRequestBody:
    api_key_l1: str = field(default=None, metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = field(default=None, metadata={'form': { 'field_name': 'apiKey_l2' }})
    travel_distance: int = field(default=None, metadata={'form': { 'field_name': 'travel_distance' }})
    trip_end: int = field(default=None, metadata={'form': { 'field_name': 'trip_end' }})
    trip_start: int = field(default=None, metadata={'form': { 'field_name': 'trip_start' }})
    vehicle_make: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'vehicle_make' }})
    vehicle_type: str = field(default=None, metadata={'form': { 'field_name': 'vehicle_type' }})
    vehicle_year: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'vehicle_year' }})
    

@dataclass
class RoadDistanceRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[RoadDistanceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class RoadDistanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
