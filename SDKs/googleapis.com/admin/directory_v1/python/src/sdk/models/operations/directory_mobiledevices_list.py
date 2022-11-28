from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DirectoryMobiledevicesListPathParams:
    customer_id: str = field(metadata={'path_param': { 'field_name': 'customerId', 'style': 'simple', 'explode': False }})
    
class DirectoryMobiledevicesListOrderByEnum(str, Enum):
    DEVICE_ID = "deviceId"
    EMAIL = "email"
    LAST_SYNC = "lastSync"
    MODEL = "model"
    NAME = "name"
    OS = "os"
    STATUS = "status"
    TYPE = "type"

class DirectoryMobiledevicesListProjectionEnum(str, Enum):
    BASIC = "BASIC"
    FULL = "FULL"

class DirectoryMobiledevicesListSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass
class DirectoryMobiledevicesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[DirectoryMobiledevicesListOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[DirectoryMobiledevicesListProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    sort_order: Optional[DirectoryMobiledevicesListSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DirectoryMobiledevicesListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryMobiledevicesListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryMobiledevicesListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryMobiledevicesListSecurity:
    option1: Optional[DirectoryMobiledevicesListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DirectoryMobiledevicesListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DirectoryMobiledevicesListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DirectoryMobiledevicesListRequest:
    path_params: DirectoryMobiledevicesListPathParams = field()
    query_params: DirectoryMobiledevicesListQueryParams = field()
    security: DirectoryMobiledevicesListSecurity = field()
    

@dataclass
class DirectoryMobiledevicesListResponse:
    content_type: str = field()
    status_code: int = field()
    mobile_devices: Optional[shared.MobileDevices] = field(default=None)
    
