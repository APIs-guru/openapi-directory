from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetParentGoalsForGoalPathParams:
    goal_gid: str = field(metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetParentGoalsForGoalQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetParentGoalsForGoal200ApplicationJSON:
    data: Optional[List[shared.GoalCompact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetParentGoalsForGoalRequest:
    path_params: GetParentGoalsForGoalPathParams = field()
    query_params: GetParentGoalsForGoalQueryParams = field()
    

@dataclass
class GetParentGoalsForGoalResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    get_parent_goals_for_goal_200_application_json_object: Optional[GetParentGoalsForGoal200ApplicationJSON] = field(default=None)
    
