from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
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
    state: GetJobsStateEnum = field(metadata={'path_param': { 'field_name': 'state', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJobsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    job_type: Optional[shared.JobTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'jobType', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJobsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetJobs200ApplicationJSON:
    data: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass
class GetJobsRequest:
    path_params: GetJobsPathParams = field()
    query_params: GetJobsQueryParams = field()
    security: GetJobsSecurity = field()
    

@dataclass
class GetJobsResponse:
    content_type: str = field()
    status_code: int = field()
    get_jobs_200_application_json_object: Optional[GetJobs200ApplicationJSON] = field(default=None)
    
