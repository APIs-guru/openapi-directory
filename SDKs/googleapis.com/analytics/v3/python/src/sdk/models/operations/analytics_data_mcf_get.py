from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class AnalyticsDataMcfGetSamplingLevelEnum(str, Enum):
    DEFAULT = "DEFAULT"
    FASTER = "FASTER"
    HIGHER_PRECISION = "HIGHER_PRECISION"


@dataclass
class AnalyticsDataMcfGetQueryParams:
    end_date: str = field(metadata={'query_param': { 'field_name': 'end-date', 'style': 'form', 'explode': True }})
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    metrics: str = field(metadata={'query_param': { 'field_name': 'metrics', 'style': 'form', 'explode': True }})
    start_date: str = field(metadata={'query_param': { 'field_name': 'start-date', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    dimensions: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dimensions', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filters: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filters', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max-results', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    sampling_level: Optional[AnalyticsDataMcfGetSamplingLevelEnum] = field(default=None, metadata={'query_param': { 'field_name': 'samplingLevel', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start-index', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AnalyticsDataMcfGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsDataMcfGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsDataMcfGetSecurity:
    option1: Optional[AnalyticsDataMcfGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AnalyticsDataMcfGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AnalyticsDataMcfGetRequest:
    query_params: AnalyticsDataMcfGetQueryParams = field()
    security: AnalyticsDataMcfGetSecurity = field()
    

@dataclass
class AnalyticsDataMcfGetResponse:
    content_type: str = field()
    status_code: int = field()
    mcf_data: Optional[shared.McfData] = field(default=None)
    
