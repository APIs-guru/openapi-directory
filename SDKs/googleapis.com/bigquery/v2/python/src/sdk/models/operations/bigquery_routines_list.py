from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BigqueryRoutinesListPathParams:
    dataset_id: str = field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class BigqueryRoutinesListQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    read_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'readMask', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class BigqueryRoutinesListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryRoutinesListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryRoutinesListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigqueryRoutinesListSecurity:
    option1: Optional[BigqueryRoutinesListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigqueryRoutinesListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[BigqueryRoutinesListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigqueryRoutinesListRequest:
    path_params: BigqueryRoutinesListPathParams = field()
    query_params: BigqueryRoutinesListQueryParams = field()
    security: BigqueryRoutinesListSecurity = field()
    

@dataclass
class BigqueryRoutinesListResponse:
    content_type: str = field()
    status_code: int = field()
    list_routines_response: Optional[shared.ListRoutinesResponse] = field(default=None)
    
