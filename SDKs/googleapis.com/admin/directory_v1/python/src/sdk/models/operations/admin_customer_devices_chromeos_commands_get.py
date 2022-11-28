from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AdminCustomerDevicesChromeosCommandsGetPathParams:
    command_id: str = field(metadata={'path_param': { 'field_name': 'commandId', 'style': 'simple', 'explode': False }})
    customer_id: str = field(metadata={'path_param': { 'field_name': 'customerId', 'style': 'simple', 'explode': False }})
    device_id: str = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdminCustomerDevicesChromeosCommandsGetQueryParams:
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
class AdminCustomerDevicesChromeosCommandsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdminCustomerDevicesChromeosCommandsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdminCustomerDevicesChromeosCommandsGetSecurity:
    option1: Optional[AdminCustomerDevicesChromeosCommandsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AdminCustomerDevicesChromeosCommandsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AdminCustomerDevicesChromeosCommandsGetRequest:
    path_params: AdminCustomerDevicesChromeosCommandsGetPathParams = field()
    query_params: AdminCustomerDevicesChromeosCommandsGetQueryParams = field()
    security: AdminCustomerDevicesChromeosCommandsGetSecurity = field()
    

@dataclass
class AdminCustomerDevicesChromeosCommandsGetResponse:
    content_type: str = field()
    status_code: int = field()
    directory_chromeosdevices_command: Optional[shared.DirectoryChromeosdevicesCommand] = field(default=None)
    
