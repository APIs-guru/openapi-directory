from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateGoalMetricPathParams:
    goal_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateGoalMetricQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateGoalMetricRequestBody:
    data: Optional[shared.GoalMetricRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class CreateGoalMetricRequest:
    path_params: CreateGoalMetricPathParams = field(default=None)
    query_params: CreateGoalMetricQueryParams = field(default=None)
    request: CreateGoalMetricRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateGoalMetric200ApplicationJSON:
    data: Optional[shared.GoalResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class CreateGoalMetricResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    create_goal_metric_200_application_json_object: Optional[CreateGoalMetric200ApplicationJSON] = field(default=None)
    
