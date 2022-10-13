from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class AppengineAppsServicesVersionsInstancesDebugPathParams:
    apps_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appsId', 'style': 'simple', 'explode': False }})
    instances_id: str = field(default=None, metadata={'path_param': { 'field_name': 'instancesId', 'style': 'simple', 'explode': False }})
    services_id: str = field(default=None, metadata={'path_param': { 'field_name': 'servicesId', 'style': 'simple', 'explode': False }})
    versions_id: str = field(default=None, metadata={'path_param': { 'field_name': 'versionsId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppengineAppsServicesVersionsInstancesDebugQueryParams:
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
class AppengineAppsServicesVersionsInstancesDebugSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppengineAppsServicesVersionsInstancesDebugRequest:
    path_params: AppengineAppsServicesVersionsInstancesDebugPathParams = field(default=None)
    query_params: AppengineAppsServicesVersionsInstancesDebugQueryParams = field(default=None)
    request: Optional[shared.DebugInstanceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AppengineAppsServicesVersionsInstancesDebugSecurity = field(default=None)
    

@dataclass
class AppengineAppsServicesVersionsInstancesDebugResponse:
    content_type: str = field(default=None)
    operation: Optional[shared.Operation] = field(default=None)
    status_code: int = field(default=None)
    
