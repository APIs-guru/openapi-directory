from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class AdsenseReportsSavedGeneratePathParams:
    saved_report_id: str = field(default=None, metadata={'path_param': { 'field_name': 'savedReportId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdsenseReportsSavedGenerateQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AdsenseReportsSavedGenerateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsenseReportsSavedGenerateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsenseReportsSavedGenerateSecurity:
    option1: Optional[AdsenseReportsSavedGenerateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AdsenseReportsSavedGenerateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AdsenseReportsSavedGenerateRequest:
    path_params: AdsenseReportsSavedGeneratePathParams = field(default=None)
    query_params: AdsenseReportsSavedGenerateQueryParams = field(default=None)
    security: AdsenseReportsSavedGenerateSecurity = field(default=None)
    

@dataclass
class AdsenseReportsSavedGenerateResponse:
    adsense_reports_generate_response: Optional[shared.AdsenseReportsGenerateResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
