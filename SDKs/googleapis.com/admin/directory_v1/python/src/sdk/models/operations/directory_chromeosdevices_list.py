from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class DirectoryChromeosdevicesListPathParams:
    customer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'customerId', 'style': 'simple', 'explode': False }})
    
class DirectoryChromeosdevicesListOrderByEnum(str, Enum):
    ANNOTATED_LOCATION = "annotatedLocation"
    ANNOTATED_USER = "annotatedUser"
    LAST_SYNC = "lastSync"
    NOTES = "notes"
    SERIAL_NUMBER = "serialNumber"
    STATUS = "status"

class DirectoryChromeosdevicesListProjectionEnum(str, Enum):
    BASIC = "BASIC"
    FULL = "FULL"

class DirectoryChromeosdevicesListSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass
class DirectoryChromeosdevicesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_child_orgunits: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeChildOrgunits', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[DirectoryChromeosdevicesListOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    org_unit_path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orgUnitPath', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    projection: Optional[DirectoryChromeosdevicesListProjectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'projection', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    sort_order: Optional[DirectoryChromeosdevicesListSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DirectoryChromeosdevicesListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryChromeosdevicesListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryChromeosdevicesListSecurity:
    option1: Optional[DirectoryChromeosdevicesListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DirectoryChromeosdevicesListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DirectoryChromeosdevicesListRequest:
    path_params: DirectoryChromeosdevicesListPathParams = field(default=None)
    query_params: DirectoryChromeosdevicesListQueryParams = field(default=None)
    security: DirectoryChromeosdevicesListSecurity = field(default=None)
    

@dataclass
class DirectoryChromeosdevicesListResponse:
    chrome_os_devices: Optional[shared.ChromeOsDevices] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
