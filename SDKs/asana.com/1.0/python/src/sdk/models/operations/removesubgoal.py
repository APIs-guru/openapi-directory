from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RemoveSubgoalPathParams:
    goal_gid: str = field(metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveSubgoalQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RemoveSubgoalRequestBody:
    data: Optional[shared.GoalRemoveSubgoalRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class RemoveSubgoal200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class RemoveSubgoalRequest:
    path_params: RemoveSubgoalPathParams = field()
    query_params: RemoveSubgoalQueryParams = field()
    request: RemoveSubgoalRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveSubgoalResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    remove_subgoal_200_application_json_object: Optional[RemoveSubgoal200ApplicationJSON] = field(default=None)
    
