from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DirectoryChromeosdevicesGetPathParams:
    customer_id: str = field(metadata={'path_param': { 'field_name': 'customerId', 'style': 'simple', 'explode': False }})
    device_id: str = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    
class DirectoryChromeosdevicesGetProjectionEnum(str, Enum):
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass
class DirectoryChromeosdevicesGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[DirectoryChromeosdevicesGetProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DirectoryChromeosdevicesGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryChromeosdevicesGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryChromeosdevicesGetSecurity:
    option1: Optional[DirectoryChromeosdevicesGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DirectoryChromeosdevicesGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DirectoryChromeosdevicesGetRequest:
    path_params: DirectoryChromeosdevicesGetPathParams = field()
    query_params: DirectoryChromeosdevicesGetQueryParams = field()
    security: DirectoryChromeosdevicesGetSecurity = field()
    

@dataclass
class DirectoryChromeosdevicesGetResponse:
    content_type: str = field()
    status_code: int = field()
    chrome_os_device: Optional[shared.ChromeOsDevice] = field(default=None)
    
