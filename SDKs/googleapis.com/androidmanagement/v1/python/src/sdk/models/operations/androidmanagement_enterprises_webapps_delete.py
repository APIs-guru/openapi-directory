from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class AndroidmanagementEnterprisesWebAppsDeletePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum(str, Enum):
    WIPE_DATA_FLAG_UNSPECIFIED = "WIPE_DATA_FLAG_UNSPECIFIED"
    PRESERVE_RESET_PROTECTION_DATA = "PRESERVE_RESET_PROTECTION_DATA"
    WIPE_EXTERNAL_STORAGE = "WIPE_EXTERNAL_STORAGE"


@dataclass
class AndroidmanagementEnterprisesWebAppsDeleteQueryParams:
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
    wipe_data_flags: Optional[List[AndroidmanagementEnterprisesWebAppsDeleteWipeDataFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'wipeDataFlags', 'style': 'form', 'explode': True }})
    wipe_reason_message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'wipeReasonMessage', 'style': 'form', 'explode': True }})
    

@dataclass
class AndroidmanagementEnterprisesWebAppsDeleteSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AndroidmanagementEnterprisesWebAppsDeleteRequest:
    path_params: AndroidmanagementEnterprisesWebAppsDeletePathParams = field(default=None)
    query_params: AndroidmanagementEnterprisesWebAppsDeleteQueryParams = field(default=None)
    security: AndroidmanagementEnterprisesWebAppsDeleteSecurity = field(default=None)
    

@dataclass
class AndroidmanagementEnterprisesWebAppsDeleteResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
