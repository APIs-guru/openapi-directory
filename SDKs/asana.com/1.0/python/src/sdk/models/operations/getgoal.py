from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetGoalPathParams:
    goal_gid: str = field(metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGoalQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetGoal200ApplicationJSON:
    data: Optional[shared.GoalResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetGoalRequest:
    path_params: GetGoalPathParams = field()
    query_params: GetGoalQueryParams = field()
    

@dataclass
class GetGoalResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    get_goal_200_application_json_object: Optional[GetGoal200ApplicationJSON] = field(default=None)
    
