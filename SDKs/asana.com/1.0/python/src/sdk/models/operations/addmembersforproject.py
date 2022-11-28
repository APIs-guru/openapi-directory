from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddMembersForProjectPathParams:
    project_gid: str = field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddMembersForProjectQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AddMembersForProjectRequestBody:
    data: Optional[shared.AddMembersRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class AddMembersForProject200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class AddMembersForProjectRequest:
    path_params: AddMembersForProjectPathParams = field()
    query_params: AddMembersForProjectQueryParams = field()
    request: AddMembersForProjectRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddMembersForProjectResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    add_members_for_project_200_application_json_object: Optional[AddMembersForProject200ApplicationJSON] = field(default=None)
    
