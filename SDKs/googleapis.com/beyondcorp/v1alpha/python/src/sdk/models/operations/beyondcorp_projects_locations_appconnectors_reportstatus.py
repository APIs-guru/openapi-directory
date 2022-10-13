from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class BeyondcorpProjectsLocationsAppConnectorsReportStatusPathParams:
    app_connector: str = field(default=None, metadata={'path_param': { 'field_name': 'appConnector', 'style': 'simple', 'explode': False }})
    

@dataclass
class BeyondcorpProjectsLocationsAppConnectorsReportStatusQueryParams:
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
class BeyondcorpProjectsLocationsAppConnectorsReportStatusSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BeyondcorpProjectsLocationsAppConnectorsReportStatusRequest:
    path_params: BeyondcorpProjectsLocationsAppConnectorsReportStatusPathParams = field(default=None)
    query_params: BeyondcorpProjectsLocationsAppConnectorsReportStatusQueryParams = field(default=None)
    request: Optional[shared.GoogleCloudBeyondcorpAppconnectorsV1alphaReportStatusRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BeyondcorpProjectsLocationsAppConnectorsReportStatusSecurity = field(default=None)
    

@dataclass
class BeyondcorpProjectsLocationsAppConnectorsReportStatusResponse:
    content_type: str = field(default=None)
    google_longrunning_operation: Optional[shared.GoogleLongrunningOperation] = field(default=None)
    status_code: int = field(default=None)
    
