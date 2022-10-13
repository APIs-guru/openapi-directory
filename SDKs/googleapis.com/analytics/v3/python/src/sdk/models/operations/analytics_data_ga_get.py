from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class AnalyticsDataGaGetOutputEnum(str, Enum):
    DATA_TABLE = "dataTable"
    JSON = "json"

class AnalyticsDataGaGetSamplingLevelEnum(str, Enum):
    DEFAULT = "DEFAULT"
    FASTER = "FASTER"
    HIGHER_PRECISION = "HIGHER_PRECISION"


@dataclass
class AnalyticsDataGaGetQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    dimensions: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dimensions', 'style': 'form', 'explode': True }})
    end_date: str = field(default=None, metadata={'query_param': { 'field_name': 'end-date', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filters: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filters', 'style': 'form', 'explode': True }})
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    include_empty_rows: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include-empty-rows', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max-results', 'style': 'form', 'explode': True }})
    metrics: str = field(default=None, metadata={'query_param': { 'field_name': 'metrics', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    output: Optional[AnalyticsDataGaGetOutputEnum] = field(default=None, metadata={'query_param': { 'field_name': 'output', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    sampling_level: Optional[AnalyticsDataGaGetSamplingLevelEnum] = field(default=None, metadata={'query_param': { 'field_name': 'samplingLevel', 'style': 'form', 'explode': True }})
    segment: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'segment', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start_date: str = field(default=None, metadata={'query_param': { 'field_name': 'start-date', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start-index', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AnalyticsDataGaGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsDataGaGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsDataGaGetSecurity:
    option1: Optional[AnalyticsDataGaGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AnalyticsDataGaGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AnalyticsDataGaGetRequest:
    query_params: AnalyticsDataGaGetQueryParams = field(default=None)
    security: AnalyticsDataGaGetSecurity = field(default=None)
    

@dataclass
class AnalyticsDataGaGetResponse:
    content_type: str = field(default=None)
    ga_data: Optional[shared.GaData] = field(default=None)
    status_code: int = field(default=None)
    
