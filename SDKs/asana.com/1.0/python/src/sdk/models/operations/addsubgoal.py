from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddSubgoalPathParams:
    goal_gid: str = field(metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddSubgoalQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AddSubgoalRequestBody:
    data: Optional[shared.GoalAddSubgoalRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class AddSubgoal200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class AddSubgoalRequest:
    path_params: AddSubgoalPathParams = field()
    query_params: AddSubgoalQueryParams = field()
    request: AddSubgoalRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddSubgoalResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    add_subgoal_200_application_json_object: Optional[AddSubgoal200ApplicationJSON] = field(default=None)
    
