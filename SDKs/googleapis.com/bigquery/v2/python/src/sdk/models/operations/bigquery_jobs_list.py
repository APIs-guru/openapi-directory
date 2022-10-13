from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class BigqueryJobsListPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    
class BigqueryJobsListProjectionEnum(str, Enum):
    FULL = "full"
    MINIMAL = "minimal"

class BigqueryJobsListStateFilterEnum(str, Enum):
    DONE = "done"
    PENDING = "pending"
    RUNNING = "running"


@dataclass
class BigqueryJobsListQueryParams:
    all_users: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allUsers', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_creation_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxCreationTime', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    min_creation_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'minCreationTime', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    parent_job_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parentJobId', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[BigqueryJobsListProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    state_filter: Optional[List[BigqueryJobsListStateFilterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'stateFilter', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class BigqueryJobsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryJobsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryJobsListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryJobsListSecurity:
    option1: Optional[BigqueryJobsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigqueryJobsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[BigqueryJobsListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigqueryJobsListRequest:
    path_params: BigqueryJobsListPathParams = field(default=None)
    query_params: BigqueryJobsListQueryParams = field(default=None)
    security: BigqueryJobsListSecurity = field(default=None)
    

@dataclass
class BigqueryJobsListResponse:
    content_type: str = field(default=None)
    job_list: Optional[shared.JobList] = field(default=None)
    status_code: int = field(default=None)
    
