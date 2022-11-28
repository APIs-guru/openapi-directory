from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetListOfCountriesFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetListOfCountriesQueryParams:
    format: Optional[GetListOfCountriesFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetListOfCountries200ApplicationJSON:
    alpha_2_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alpha-2-code') }})
    alpha_3_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alpha-3-code') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class GetListOfCountriesRequest:
    query_params: GetListOfCountriesQueryParams = field()
    

@dataclass
class GetListOfCountriesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_list_of_countries_200_application_json_objects: Optional[List[GetListOfCountries200ApplicationJSON]] = field(default=None)
    
