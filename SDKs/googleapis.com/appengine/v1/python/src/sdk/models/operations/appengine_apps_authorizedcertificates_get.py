from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AppengineAppsAuthorizedCertificatesGetPathParams:
    apps_id: str = field(metadata={'path_param': { 'field_name': 'appsId', 'style': 'simple', 'explode': False }})
    authorized_certificates_id: str = field(metadata={'path_param': { 'field_name': 'authorizedCertificatesId', 'style': 'simple', 'explode': False }})
    
class AppengineAppsAuthorizedCertificatesGetViewEnum(str, Enum):
    BASIC_CERTIFICATE = "BASIC_CERTIFICATE"
    FULL_CERTIFICATE = "FULL_CERTIFICATE"


@dataclass
class AppengineAppsAuthorizedCertificatesGetQueryParams:
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
    view: Optional[AppengineAppsAuthorizedCertificatesGetViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class AppengineAppsAuthorizedCertificatesGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppengineAppsAuthorizedCertificatesGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppengineAppsAuthorizedCertificatesGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppengineAppsAuthorizedCertificatesGetSecurity:
    option1: Optional[AppengineAppsAuthorizedCertificatesGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AppengineAppsAuthorizedCertificatesGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[AppengineAppsAuthorizedCertificatesGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AppengineAppsAuthorizedCertificatesGetRequest:
    path_params: AppengineAppsAuthorizedCertificatesGetPathParams = field()
    query_params: AppengineAppsAuthorizedCertificatesGetQueryParams = field()
    security: AppengineAppsAuthorizedCertificatesGetSecurity = field()
    

@dataclass
class AppengineAppsAuthorizedCertificatesGetResponse:
    content_type: str = field()
    status_code: int = field()
    authorized_certificate: Optional[shared.AuthorizedCertificate] = field(default=None)
    
