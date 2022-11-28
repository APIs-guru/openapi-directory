from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigPathParams:
    app_connector: str = field(metadata={'path_param': { 'field_name': 'appConnector', 'style': 'simple', 'explode': False }})
    

@dataclass
class BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams:
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
class BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest:
    path_params: BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigPathParams = field()
    query_params: BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigQueryParams = field()
    security: BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity = field()
    

@dataclass
class BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse:
    content_type: str = field()
    status_code: int = field()
    google_cloud_beyondcorp_appconnectors_v1alpha_resolve_instance_config_response: Optional[shared.GoogleCloudBeyondcorpAppconnectorsV1alphaResolveInstanceConfigResponse] = field(default=None)
    
