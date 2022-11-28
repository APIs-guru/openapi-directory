from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AppengineAppsServicesVersionsListPathParams:
    apps_id: str = field(metadata={'path_param': { 'field_name': 'appsId', 'style': 'simple', 'explode': False }})
    services_id: str = field(metadata={'path_param': { 'field_name': 'servicesId', 'style': 'simple', 'explode': False }})
    
class AppengineAppsServicesVersionsListViewEnum(str, Enum):
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass
class AppengineAppsServicesVersionsListQueryParams:
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
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    view: Optional[AppengineAppsServicesVersionsListViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class AppengineAppsServicesVersionsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppengineAppsServicesVersionsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppengineAppsServicesVersionsListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppengineAppsServicesVersionsListSecurity:
    option1: Optional[AppengineAppsServicesVersionsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AppengineAppsServicesVersionsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[AppengineAppsServicesVersionsListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AppengineAppsServicesVersionsListRequest:
    path_params: AppengineAppsServicesVersionsListPathParams = field()
    query_params: AppengineAppsServicesVersionsListQueryParams = field()
    security: AppengineAppsServicesVersionsListSecurity = field()
    

@dataclass
class AppengineAppsServicesVersionsListResponse:
    content_type: str = field()
    status_code: int = field()
    list_versions_response: Optional[shared.ListVersionsResponse] = field(default=None)
    
