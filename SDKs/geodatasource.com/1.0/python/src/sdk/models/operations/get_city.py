from dataclasses import dataclass, field
from typing import Enum,Optional

class GetCityFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetCityQueryParams:
    format: Optional[GetCityFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    key: str = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    lat: float = field(default=None, metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: float = field(default=None, metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCityRequest:
    query_params: GetCityQueryParams = field(default=None)
    

@dataclass
class GetCityResponse:
    content_type: str = field(default=None)
    get_city_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
