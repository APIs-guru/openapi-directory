from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetBng2latlongEastingNorthingPathParams:
    easting: int = field(metadata={'path_param': { 'field_name': 'easting', 'style': 'simple', 'explode': False }})
    northing: int = field(metadata={'path_param': { 'field_name': 'northing', 'style': 'simple', 'explode': False }})
    
class GetBng2latlongEastingNorthing200ApplicationJSONStatusEnum(str, Enum):
    OK = "ok"
    ERROR = "error"


@dataclass_json
@dataclass
class GetBng2latlongEastingNorthing200ApplicationJSON:
    easting: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('easting') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    northing: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('northing') }})
    status: Optional[GetBng2latlongEastingNorthing200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetBng2latlongEastingNorthingRequest:
    path_params: GetBng2latlongEastingNorthingPathParams = field()
    

@dataclass
class GetBng2latlongEastingNorthingResponse:
    content_type: str = field()
    status_code: int = field()
    get_bng2latlong_easting_northing_200_application_json_object: Optional[GetBng2latlongEastingNorthing200ApplicationJSON] = field(default=None)
    
