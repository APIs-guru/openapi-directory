from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSectionPathParams:
    section_gid: str = field(metadata={'path_param': { 'field_name': 'section_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSectionQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetSection200ApplicationJSON:
    data: Optional[shared.SectionResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetSectionRequest:
    path_params: GetSectionPathParams = field()
    query_params: GetSectionQueryParams = field()
    

@dataclass
class GetSectionResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    get_section_200_application_json_object: Optional[GetSection200ApplicationJSON] = field(default=None)
    
