from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class AdsenseAccountsReportsGenerateCsvPathParams:
    account: str = field(default=None, metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    
class AdsenseAccountsReportsGenerateCsvDateRangeEnum(str, Enum):
    REPORTING_DATE_RANGE_UNSPECIFIED = "REPORTING_DATE_RANGE_UNSPECIFIED"
    CUSTOM = "CUSTOM"
    TODAY = "TODAY"
    YESTERDAY = "YESTERDAY"
    MONTH_TO_DATE = "MONTH_TO_DATE"
    YEAR_TO_DATE = "YEAR_TO_DATE"
    LAST_7_DAYS = "LAST_7_DAYS"
    LAST_30_DAYS = "LAST_30_DAYS"

class AdsenseAccountsReportsGenerateCsvDimensionsEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    DATE = "DATE"
    WEEK = "WEEK"
    MONTH = "MONTH"
    ACCOUNT_NAME = "ACCOUNT_NAME"
    AD_CLIENT_ID = "AD_CLIENT_ID"
    HOSTED_AD_CLIENT_ID = "HOSTED_AD_CLIENT_ID"
    PRODUCT_NAME = "PRODUCT_NAME"
    PRODUCT_CODE = "PRODUCT_CODE"
    AD_UNIT_NAME = "AD_UNIT_NAME"
    AD_UNIT_ID = "AD_UNIT_ID"
    AD_UNIT_SIZE_NAME = "AD_UNIT_SIZE_NAME"
    AD_UNIT_SIZE_CODE = "AD_UNIT_SIZE_CODE"
    CUSTOM_CHANNEL_NAME = "CUSTOM_CHANNEL_NAME"
    CUSTOM_CHANNEL_ID = "CUSTOM_CHANNEL_ID"
    OWNED_SITE_DOMAIN_NAME = "OWNED_SITE_DOMAIN_NAME"
    OWNED_SITE_ID = "OWNED_SITE_ID"
    URL_CHANNEL_NAME = "URL_CHANNEL_NAME"
    URL_CHANNEL_ID = "URL_CHANNEL_ID"
    BUYER_NETWORK_NAME = "BUYER_NETWORK_NAME"
    BUYER_NETWORK_ID = "BUYER_NETWORK_ID"
    BID_TYPE_NAME = "BID_TYPE_NAME"
    BID_TYPE_CODE = "BID_TYPE_CODE"
    CREATIVE_SIZE_NAME = "CREATIVE_SIZE_NAME"
    CREATIVE_SIZE_CODE = "CREATIVE_SIZE_CODE"
    DOMAIN_NAME = "DOMAIN_NAME"
    DOMAIN_CODE = "DOMAIN_CODE"
    COUNTRY_NAME = "COUNTRY_NAME"
    COUNTRY_CODE = "COUNTRY_CODE"
    PLATFORM_TYPE_NAME = "PLATFORM_TYPE_NAME"
    PLATFORM_TYPE_CODE = "PLATFORM_TYPE_CODE"
    TARGETING_TYPE_NAME = "TARGETING_TYPE_NAME"
    TARGETING_TYPE_CODE = "TARGETING_TYPE_CODE"
    CONTENT_PLATFORM_NAME = "CONTENT_PLATFORM_NAME"
    CONTENT_PLATFORM_CODE = "CONTENT_PLATFORM_CODE"
    AD_PLACEMENT_NAME = "AD_PLACEMENT_NAME"
    AD_PLACEMENT_CODE = "AD_PLACEMENT_CODE"
    REQUESTED_AD_TYPE_NAME = "REQUESTED_AD_TYPE_NAME"
    REQUESTED_AD_TYPE_CODE = "REQUESTED_AD_TYPE_CODE"
    SERVED_AD_TYPE_NAME = "SERVED_AD_TYPE_NAME"
    SERVED_AD_TYPE_CODE = "SERVED_AD_TYPE_CODE"
    AD_FORMAT_NAME = "AD_FORMAT_NAME"
    AD_FORMAT_CODE = "AD_FORMAT_CODE"
    CUSTOM_SEARCH_STYLE_NAME = "CUSTOM_SEARCH_STYLE_NAME"
    CUSTOM_SEARCH_STYLE_ID = "CUSTOM_SEARCH_STYLE_ID"
    DOMAIN_REGISTRANT = "DOMAIN_REGISTRANT"
    WEBSEARCH_QUERY_STRING = "WEBSEARCH_QUERY_STRING"

class AdsenseAccountsReportsGenerateCsvMetricsEnum(str, Enum):
    METRIC_UNSPECIFIED = "METRIC_UNSPECIFIED"
    PAGE_VIEWS = "PAGE_VIEWS"
    AD_REQUESTS = "AD_REQUESTS"
    MATCHED_AD_REQUESTS = "MATCHED_AD_REQUESTS"
    TOTAL_IMPRESSIONS = "TOTAL_IMPRESSIONS"
    IMPRESSIONS = "IMPRESSIONS"
    INDIVIDUAL_AD_IMPRESSIONS = "INDIVIDUAL_AD_IMPRESSIONS"
    CLICKS = "CLICKS"
    PAGE_VIEWS_SPAM_RATIO = "PAGE_VIEWS_SPAM_RATIO"
    AD_REQUESTS_SPAM_RATIO = "AD_REQUESTS_SPAM_RATIO"
    MATCHED_AD_REQUESTS_SPAM_RATIO = "MATCHED_AD_REQUESTS_SPAM_RATIO"
    IMPRESSIONS_SPAM_RATIO = "IMPRESSIONS_SPAM_RATIO"
    INDIVIDUAL_AD_IMPRESSIONS_SPAM_RATIO = "INDIVIDUAL_AD_IMPRESSIONS_SPAM_RATIO"
    CLICKS_SPAM_RATIO = "CLICKS_SPAM_RATIO"
    AD_REQUESTS_COVERAGE = "AD_REQUESTS_COVERAGE"
    PAGE_VIEWS_CTR = "PAGE_VIEWS_CTR"
    AD_REQUESTS_CTR = "AD_REQUESTS_CTR"
    MATCHED_AD_REQUESTS_CTR = "MATCHED_AD_REQUESTS_CTR"
    IMPRESSIONS_CTR = "IMPRESSIONS_CTR"
    INDIVIDUAL_AD_IMPRESSIONS_CTR = "INDIVIDUAL_AD_IMPRESSIONS_CTR"
    ACTIVE_VIEW_MEASURABILITY = "ACTIVE_VIEW_MEASURABILITY"
    ACTIVE_VIEW_VIEWABILITY = "ACTIVE_VIEW_VIEWABILITY"
    ACTIVE_VIEW_TIME = "ACTIVE_VIEW_TIME"
    ESTIMATED_EARNINGS = "ESTIMATED_EARNINGS"
    PAGE_VIEWS_RPM = "PAGE_VIEWS_RPM"
    AD_REQUESTS_RPM = "AD_REQUESTS_RPM"
    MATCHED_AD_REQUESTS_RPM = "MATCHED_AD_REQUESTS_RPM"
    IMPRESSIONS_RPM = "IMPRESSIONS_RPM"
    INDIVIDUAL_AD_IMPRESSIONS_RPM = "INDIVIDUAL_AD_IMPRESSIONS_RPM"
    COST_PER_CLICK = "COST_PER_CLICK"
    ADS_PER_IMPRESSION = "ADS_PER_IMPRESSION"
    TOTAL_EARNINGS = "TOTAL_EARNINGS"
    WEBSEARCH_RESULT_PAGES = "WEBSEARCH_RESULT_PAGES"

class AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum(str, Enum):
    REPORTING_TIME_ZONE_UNSPECIFIED = "REPORTING_TIME_ZONE_UNSPECIFIED"
    ACCOUNT_TIME_ZONE = "ACCOUNT_TIME_ZONE"
    GOOGLE_TIME_ZONE = "GOOGLE_TIME_ZONE"


@dataclass
class AdsenseAccountsReportsGenerateCsvQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    currency_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currencyCode', 'style': 'form', 'explode': True }})
    date_range: Optional[AdsenseAccountsReportsGenerateCsvDateRangeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'dateRange', 'style': 'form', 'explode': True }})
    dimensions: Optional[List[AdsenseAccountsReportsGenerateCsvDimensionsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'dimensions', 'style': 'form', 'explode': True }})
    end_date_day: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endDate.day', 'style': 'form', 'explode': True }})
    end_date_month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endDate.month', 'style': 'form', 'explode': True }})
    end_date_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endDate.year', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filters: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'filters', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'languageCode', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    metrics: Optional[List[AdsenseAccountsReportsGenerateCsvMetricsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'metrics', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    reporting_time_zone: Optional[AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum] = field(default=None, metadata={'query_param': { 'field_name': 'reportingTimeZone', 'style': 'form', 'explode': True }})
    start_date_day: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startDate.day', 'style': 'form', 'explode': True }})
    start_date_month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startDate.month', 'style': 'form', 'explode': True }})
    start_date_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startDate.year', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class AdsenseAccountsReportsGenerateCsvSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsenseAccountsReportsGenerateCsvSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsenseAccountsReportsGenerateCsvSecurity:
    option1: Optional[AdsenseAccountsReportsGenerateCsvSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AdsenseAccountsReportsGenerateCsvSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AdsenseAccountsReportsGenerateCsvRequest:
    path_params: AdsenseAccountsReportsGenerateCsvPathParams = field(default=None)
    query_params: AdsenseAccountsReportsGenerateCsvQueryParams = field(default=None)
    security: AdsenseAccountsReportsGenerateCsvSecurity = field(default=None)
    

@dataclass
class AdsenseAccountsReportsGenerateCsvResponse:
    content_type: str = field(default=None)
    http_body: Optional[shared.HTTPBody] = field(default=None)
    status_code: int = field(default=None)
    
