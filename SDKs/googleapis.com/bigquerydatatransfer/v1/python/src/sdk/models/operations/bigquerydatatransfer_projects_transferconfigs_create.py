from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class BigquerydatatransferProjectsTransferConfigsCreatePathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsCreateQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    authorization_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authorizationCode', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    service_account_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serviceAccountName', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    version_info: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'versionInfo', 'style': 'form', 'explode': True }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsCreateSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsCreateRequest:
    path_params: BigquerydatatransferProjectsTransferConfigsCreatePathParams = field(default=None)
    query_params: BigquerydatatransferProjectsTransferConfigsCreateQueryParams = field(default=None)
    request: Optional[shared.TransferConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BigquerydatatransferProjectsTransferConfigsCreateSecurity = field(default=None)
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    transfer_config: Optional[shared.TransferConfig] = field(default=None)
    
