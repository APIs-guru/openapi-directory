from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SupportingWorkPathParams:
    goal_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class SupportingWorkQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class SupportingWorkRequest:
    path_params: SupportingWorkPathParams = field(default=None)
    query_params: SupportingWorkQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class SupportingWork200ApplicationJSON:
    data: Optional[List[shared.ProjectCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class SupportingWorkResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    supporting_work_200_application_json_object: Optional[SupportingWork200ApplicationJSON] = field(default=None)
    
