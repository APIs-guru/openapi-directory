from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetJobsStateEnum(str, Enum):
    UNKNOWN = ""
    ACTIVE = "active"
    COMPLETED = "completed"
    FAILED = "failed"
    WAITING = "waiting"
    DELAYED = "delayed"


@dataclass
class GetJobsPathParams:
    state: GetJobsStateEnum = field(default=None, metadata={'path_param': { 'field_name': 'state', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJobsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    job_type: Optional[shared.JobTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'jobType', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJobsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetJobsRequest:
    path_params: GetJobsPathParams = field(default=None)
    query_params: GetJobsQueryParams = field(default=None)
    security: GetJobsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetJobs200ApplicationJSON:
    data: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class GetJobsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_jobs_200_application_json_object: Optional[GetJobs200ApplicationJSON] = field(default=None)
    
