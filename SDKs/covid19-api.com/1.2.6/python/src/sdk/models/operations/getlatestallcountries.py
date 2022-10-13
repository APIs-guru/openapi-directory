from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetLatestAllCountriesFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetLatestAllCountriesQueryParams:
    format: Optional[GetLatestAllCountriesFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLatestAllCountriesRequest:
    query_params: GetLatestAllCountriesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLatestAllCountries200ApplicationJSON:
    confirmed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmed' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    critical: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'critical' }})
    deaths: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deaths' }})
    last_change: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastChange', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    recovered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recovered' }})
    

@dataclass
class GetLatestAllCountriesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_latest_all_countries_200_application_json_objects: Optional[List[GetLatestAllCountries200ApplicationJSON]] = field(default=None)
    
