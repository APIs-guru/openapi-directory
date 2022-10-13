from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateGoalMetricPathParams:
    goal_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGoalMetricQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class UpdateGoalMetricRequestBody:
    data: Optional[shared.GoalMetricCurrentValueRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class UpdateGoalMetricRequest:
    path_params: UpdateGoalMetricPathParams = field(default=None)
    query_params: UpdateGoalMetricQueryParams = field(default=None)
    request: UpdateGoalMetricRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateGoalMetric200ApplicationJSON:
    data: Optional[shared.GoalResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class UpdateGoalMetricResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    update_goal_metric_200_application_json_object: Optional[UpdateGoalMetric200ApplicationJSON] = field(default=None)
    
