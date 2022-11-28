from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AdsenseAccountsReportsSavedGenerateCsvPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum(str, Enum):
    REPORTING_DATE_RANGE_UNSPECIFIED = "REPORTING_DATE_RANGE_UNSPECIFIED"
    CUSTOM = "CUSTOM"
    TODAY = "TODAY"
    YESTERDAY = "YESTERDAY"
    MONTH_TO_DATE = "MONTH_TO_DATE"
    YEAR_TO_DATE = "YEAR_TO_DATE"
    LAST_7_DAYS = "LAST_7_DAYS"
    LAST_30_DAYS = "LAST_30_DAYS"

class AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum(str, Enum):
    REPORTING_TIME_ZONE_UNSPECIFIED = "REPORTING_TIME_ZONE_UNSPECIFIED"
    ACCOUNT_TIME_ZONE = "ACCOUNT_TIME_ZONE"
    GOOGLE_TIME_ZONE = "GOOGLE_TIME_ZONE"


@dataclass
class AdsenseAccountsReportsSavedGenerateCsvQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    currency_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currencyCode', 'style': 'form', 'explode': True }})
    date_range: Optional[AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'dateRange', 'style': 'form', 'explode': True }})
    end_date_day: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endDate.day', 'style': 'form', 'explode': True }})
    end_date_month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endDate.month', 'style': 'form', 'explode': True }})
    end_date_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endDate.year', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    reporting_time_zone: Optional[AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum] = field(default=None, metadata={'query_param': { 'field_name': 'reportingTimeZone', 'style': 'form', 'explode': True }})
    start_date_day: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startDate.day', 'style': 'form', 'explode': True }})
    start_date_month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startDate.month', 'style': 'form', 'explode': True }})
    start_date_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startDate.year', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class AdsenseAccountsReportsSavedGenerateCsvSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsenseAccountsReportsSavedGenerateCsvSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsenseAccountsReportsSavedGenerateCsvSecurity:
    option1: Optional[AdsenseAccountsReportsSavedGenerateCsvSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AdsenseAccountsReportsSavedGenerateCsvSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AdsenseAccountsReportsSavedGenerateCsvRequest:
    path_params: AdsenseAccountsReportsSavedGenerateCsvPathParams = field()
    query_params: AdsenseAccountsReportsSavedGenerateCsvQueryParams = field()
    security: AdsenseAccountsReportsSavedGenerateCsvSecurity = field()
    

@dataclass
class AdsenseAccountsReportsSavedGenerateCsvResponse:
    content_type: str = field()
    status_code: int = field()
    http_body: Optional[shared.HTTPBody] = field(default=None)
    
