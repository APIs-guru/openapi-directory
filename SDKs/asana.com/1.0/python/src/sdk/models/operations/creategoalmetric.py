from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateGoalMetricPathParams:
    goal_gid: str = field(metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateGoalMetricQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateGoalMetricRequestBodyInput:
    data: Optional[shared.GoalMetricRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class CreateGoalMetric200ApplicationJSON:
    data: Optional[shared.GoalResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class CreateGoalMetricRequest:
    path_params: CreateGoalMetricPathParams = field()
    query_params: CreateGoalMetricQueryParams = field()
    request: CreateGoalMetricRequestBodyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGoalMetricResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    create_goal_metric_200_application_json_object: Optional[CreateGoalMetric200ApplicationJSON] = field(default=None)
    
