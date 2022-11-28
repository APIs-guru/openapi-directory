from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AdsenseReportsGenerateQueryParams:
    end_date: str = field(metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    start_date: str = field(metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    account_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'accountId', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    currency: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    dimension: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'dimension', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    metric: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'metric', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    sort: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    use_timezone_reporting: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'useTimezoneReporting', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AdsenseReportsGenerateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsenseReportsGenerateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsenseReportsGenerateSecurity:
    option1: Optional[AdsenseReportsGenerateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AdsenseReportsGenerateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AdsenseReportsGenerateRequest:
    query_params: AdsenseReportsGenerateQueryParams = field()
    security: AdsenseReportsGenerateSecurity = field()
    

@dataclass
class AdsenseReportsGenerateResponse:
    content_type: str = field()
    status_code: int = field()
    adsense_reports_generate_response: Optional[shared.AdsenseReportsGenerateResponse] = field(default=None)
    
