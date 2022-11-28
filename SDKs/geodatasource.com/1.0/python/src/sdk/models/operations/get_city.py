from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetCityFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetCityQueryParams:
    key: str = field(metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    lat: float = field(metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: float = field(metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    format: Optional[GetCityFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCityRequest:
    query_params: GetCityQueryParams = field()
    

@dataclass
class GetCityResponse:
    content_type: str = field()
    status_code: int = field()
    get_city_200_application_json_string: Optional[str] = field(default=None)
    
