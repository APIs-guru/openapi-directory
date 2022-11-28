from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RemoveSupportingWorkForGoalPathParams:
    goal_gid: str = field(metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveSupportingWorkForGoalQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RemoveSupportingWorkForGoalRequestBody:
    data: Optional[shared.GoalAddSupportingWorkRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class RemoveSupportingWorkForGoal200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class RemoveSupportingWorkForGoalRequest:
    path_params: RemoveSupportingWorkForGoalPathParams = field()
    query_params: RemoveSupportingWorkForGoalQueryParams = field()
    request: RemoveSupportingWorkForGoalRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveSupportingWorkForGoalResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    remove_supporting_work_for_goal_200_application_json_object: Optional[RemoveSupportingWorkForGoal200ApplicationJSON] = field(default=None)
    
