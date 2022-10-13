from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetBng2latlongEastingNorthingPathParams:
    easting: int = field(default=None, metadata={'path_param': { 'field_name': 'easting', 'style': 'simple', 'explode': False }})
    northing: int = field(default=None, metadata={'path_param': { 'field_name': 'northing', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBng2latlongEastingNorthingRequest:
    path_params: GetBng2latlongEastingNorthingPathParams = field(default=None)
    
class GetBng2latlongEastingNorthing200ApplicationJSONStatusEnum(str, Enum):
    OK = "ok"
    ERROR = "error"


@dataclass_json
@dataclass
class GetBng2latlongEastingNorthing200ApplicationJSON:
    easting: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'easting' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    northing: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'northing' }})
    status: Optional[GetBng2latlongEastingNorthing200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetBng2latlongEastingNorthingResponse:
    content_type: str = field(default=None)
    get_bng2latlong_easting_northing_200_application_json_object: Optional[GetBng2latlongEastingNorthing200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
