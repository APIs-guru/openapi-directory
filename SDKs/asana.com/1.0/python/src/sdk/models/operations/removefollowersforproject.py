from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RemoveFollowersForProjectPathParams:
    project_gid: str = field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveFollowersForProjectQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RemoveFollowersForProjectRequestBody:
    data: Optional[shared.RemoveFollowersRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class RemoveFollowersForProject200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class RemoveFollowersForProjectRequest:
    path_params: RemoveFollowersForProjectPathParams = field()
    query_params: RemoveFollowersForProjectQueryParams = field()
    request: RemoveFollowersForProjectRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveFollowersForProjectResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    remove_followers_for_project_200_application_json_object: Optional[RemoveFollowersForProject200ApplicationJSON] = field(default=None)
    
