from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetListOfCountriesFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetListOfCountriesQueryParams:
    format: Optional[GetListOfCountriesFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListOfCountriesRequest:
    query_params: GetListOfCountriesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetListOfCountries200ApplicationJSON:
    alpha_2_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alpha-2-code' }})
    alpha_3_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alpha-3-code' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class GetListOfCountriesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_list_of_countries_200_application_json_objects: Optional[List[GetListOfCountries200ApplicationJSON]] = field(default=None)
    
