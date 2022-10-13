from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListPathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    
class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum(str, Enum):
    MESSAGE_SEVERITY_UNSPECIFIED = "MESSAGE_SEVERITY_UNSPECIFIED"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    message_types: Optional[List[BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'messageTypes', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity:
    option1: Optional[BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest:
    path_params: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListPathParams = field(default=None)
    query_params: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams = field(default=None)
    security: BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity = field(default=None)
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse:
    content_type: str = field(default=None)
    list_transfer_logs_response: Optional[shared.ListTransferLogsResponse] = field(default=None)
    status_code: int = field(default=None)
    
