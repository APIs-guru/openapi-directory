from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class AppengineAppsServicesVersionsInstancesGetPathParams:
    apps_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appsId', 'style': 'simple', 'explode': False }})
    instances_id: str = field(default=None, metadata={'path_param': { 'field_name': 'instancesId', 'style': 'simple', 'explode': False }})
    services_id: str = field(default=None, metadata={'path_param': { 'field_name': 'servicesId', 'style': 'simple', 'explode': False }})
    versions_id: str = field(default=None, metadata={'path_param': { 'field_name': 'versionsId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppengineAppsServicesVersionsInstancesGetQueryParams:
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
class AppengineAppsServicesVersionsInstancesGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppengineAppsServicesVersionsInstancesGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppengineAppsServicesVersionsInstancesGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppengineAppsServicesVersionsInstancesGetSecurity:
    option1: Optional[AppengineAppsServicesVersionsInstancesGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AppengineAppsServicesVersionsInstancesGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[AppengineAppsServicesVersionsInstancesGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AppengineAppsServicesVersionsInstancesGetRequest:
    path_params: AppengineAppsServicesVersionsInstancesGetPathParams = field(default=None)
    query_params: AppengineAppsServicesVersionsInstancesGetQueryParams = field(default=None)
    security: AppengineAppsServicesVersionsInstancesGetSecurity = field(default=None)
    

@dataclass
class AppengineAppsServicesVersionsInstancesGetResponse:
    content_type: str = field(default=None)
    instance: Optional[shared.Instance] = field(default=None)
    status_code: int = field(default=None)
    
