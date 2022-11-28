from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BigqueryJobsGetQueryResultsPathParams:
    job_id: str = field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class BigqueryJobsGetQueryResultsQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    location: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start_index: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    timeout_ms: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeoutMs', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class BigqueryJobsGetQueryResultsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryJobsGetQueryResultsSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryJobsGetQueryResultsSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryJobsGetQueryResultsSecurity:
    option1: Optional[BigqueryJobsGetQueryResultsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigqueryJobsGetQueryResultsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[BigqueryJobsGetQueryResultsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigqueryJobsGetQueryResultsRequest:
    path_params: BigqueryJobsGetQueryResultsPathParams = field()
    query_params: BigqueryJobsGetQueryResultsQueryParams = field()
    security: BigqueryJobsGetQueryResultsSecurity = field()
    

@dataclass
class BigqueryJobsGetQueryResultsResponse:
    content_type: str = field()
    status_code: int = field()
    get_query_results_response: Optional[shared.GetQueryResultsResponse] = field(default=None)
    
