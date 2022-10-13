from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetSubgoalsForGoalPathParams:
    goal_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubgoalsForGoalQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubgoalsForGoalRequest:
    path_params: GetSubgoalsForGoalPathParams = field(default=None)
    query_params: GetSubgoalsForGoalQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetSubgoalsForGoal200ApplicationJSON:
    data: Optional[List[shared.GoalCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetSubgoalsForGoalResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    get_subgoals_for_goal_200_application_json_object: Optional[GetSubgoalsForGoal200ApplicationJSON] = field(default=None)
    
