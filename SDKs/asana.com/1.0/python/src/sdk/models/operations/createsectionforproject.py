from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateSectionForProjectPathParams:
    project_gid: str = field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSectionForProjectQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateSectionForProjectRequestBody:
    data: Optional[shared.SectionRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class CreateSectionForProject201ApplicationJSON:
    data: Optional[shared.SectionResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class CreateSectionForProjectRequest:
    path_params: CreateSectionForProjectPathParams = field()
    query_params: CreateSectionForProjectQueryParams = field()
    request: CreateSectionForProjectRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSectionForProjectResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    create_section_for_project_201_application_json_object: Optional[CreateSectionForProject201ApplicationJSON] = field(default=None)
    
