from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddSupportingWorkForGoalPathParams:
    goal_gid: str = field(metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddSupportingWorkForGoalQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AddSupportingWorkForGoalRequestBody:
    data: Optional[shared.GoalAddSupportingWorkRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class AddSupportingWorkForGoal200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class AddSupportingWorkForGoalRequest:
    path_params: AddSupportingWorkForGoalPathParams = field()
    query_params: AddSupportingWorkForGoalQueryParams = field()
    request: AddSupportingWorkForGoalRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddSupportingWorkForGoalResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    add_supporting_work_for_goal_200_application_json_object: Optional[AddSupportingWorkForGoal200ApplicationJSON] = field(default=None)
    
