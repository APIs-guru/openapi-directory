from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsDeletePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsDeleteQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurity:
    option1: Optional[BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsDeleteRequest:
    path_params: BigquerydatatransferProjectsTransferConfigsRunsDeletePathParams = field()
    query_params: BigquerydatatransferProjectsTransferConfigsRunsDeleteQueryParams = field()
    security: BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurity = field()
    

@dataclass
class BigquerydatatransferProjectsTransferConfigsRunsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
