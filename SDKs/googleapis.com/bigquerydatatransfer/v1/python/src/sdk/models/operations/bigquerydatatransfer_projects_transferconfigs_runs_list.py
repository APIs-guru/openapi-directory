from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsListPathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum(str, Enum):
    RUN_ATTEMPT_UNSPECIFIED = "RUN_ATTEMPT_UNSPECIFIED"
    LATEST = "LATEST"

class BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum(str, Enum):
    TRANSFER_STATE_UNSPECIFIED = "TRANSFER_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"


@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    run_attempt: Optional[BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum] = field(default=None, metadata={'query_param': { 'field_name': 'runAttempt', 'style': 'form', 'explode': True }})
    states: Optional[List[BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'states', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsListSecurity:
    option1: Optional[BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsListRequest:
    path_params: BigquerydatatransferProjectsTransferConfigsRunsListPathParams = field()
    query_params: BigquerydatatransferProjectsTransferConfigsRunsListQueryParams = field()
    security: BigquerydatatransferProjectsTransferConfigsRunsListSecurity = field()
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsListResponse:
    content_type: str = field()
    status_code: int = field()
    list_transfer_runs_response: Optional[shared.ListTransferRunsResponse] = field(default=None)
    
