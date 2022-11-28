from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetGoalsQueryParams:
    is_workspace_level: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_workspace_level', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    portfolio: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'portfolio', 'style': 'form', 'explode': True }})
    project: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    time_periods: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'time_periods', 'style': 'form', 'explode': True }})
    workspace: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetGoals200ApplicationJSON:
    data: Optional[List[shared.GoalCompact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetGoalsRequest:
    query_params: GetGoalsQueryParams = field()
    

@dataclass
class GetGoalsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    get_goals_200_application_json_object: Optional[GetGoals200ApplicationJSON] = field(default=None)
    
