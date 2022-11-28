from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RemoveMembersForProjectPathParams:
    project_gid: str = field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveMembersForProjectQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RemoveMembersForProjectRequestBody:
    data: Optional[shared.RemoveMembersRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class RemoveMembersForProject200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class RemoveMembersForProjectRequest:
    path_params: RemoveMembersForProjectPathParams = field()
    query_params: RemoveMembersForProjectQueryParams = field()
    request: RemoveMembersForProjectRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveMembersForProjectResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    remove_members_for_project_200_application_json_object: Optional[RemoveMembersForProject200ApplicationJSON] = field(default=None)
    
