from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetLatestCountryDataByNameFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetLatestCountryDataByNameQueryParams:
    format: Optional[GetLatestCountryDataByNameFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLatestCountryDataByNameRequest:
    query_params: GetLatestCountryDataByNameQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLatestCountryDataByName200ApplicationJSON:
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
class GetLatestCountryDataByNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_latest_country_data_by_name_200_application_json_objects: Optional[List[GetLatestCountryDataByName200ApplicationJSON]] = field(default=None)
    
