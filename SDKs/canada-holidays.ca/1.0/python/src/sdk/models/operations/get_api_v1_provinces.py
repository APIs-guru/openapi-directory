from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetAPIV1ProvincesQueryParams:
    year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetAPIV1Provinces200ApplicationJSON:
    provinces: Optional[List[shared.Province]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provinces') }})
    

@dataclass
class GetAPIV1ProvincesRequest:
    query_params: GetAPIV1ProvincesQueryParams = field()
    

@dataclass
class GetAPIV1ProvincesResponse:
    content_type: str = field()
    status_code: int = field()
    get_api_v1_provinces_200_application_json_object: Optional[GetAPIV1Provinces200ApplicationJSON] = field(default=None)
    
