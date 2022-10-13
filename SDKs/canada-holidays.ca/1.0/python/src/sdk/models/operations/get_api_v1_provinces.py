from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetAPIV1ProvincesQueryParams:
    year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1ProvincesRequest:
    query_params: GetAPIV1ProvincesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAPIV1Provinces200ApplicationJSON:
    provinces: Optional[List[shared.Province]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provinces' }})
    

@dataclass
class GetAPIV1ProvincesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_api_v1_provinces_200_application_json_object: Optional[GetAPIV1Provinces200ApplicationJSON] = field(default=None)
    
