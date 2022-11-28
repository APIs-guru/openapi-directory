from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AnalyticsDataRealtimeGetQueryParams:
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    metrics: str = field(metadata={'query_param': { 'field_name': 'metrics', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    dimensions: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dimensions', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filters: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filters', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max-results', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AnalyticsDataRealtimeGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsDataRealtimeGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AnalyticsDataRealtimeGetSecurity:
    option1: Optional[AnalyticsDataRealtimeGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AnalyticsDataRealtimeGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AnalyticsDataRealtimeGetRequest:
    query_params: AnalyticsDataRealtimeGetQueryParams = field()
    security: AnalyticsDataRealtimeGetSecurity = field()
    

@dataclass
class AnalyticsDataRealtimeGetResponse:
    content_type: str = field()
    status_code: int = field()
    realtime_data: Optional[shared.RealtimeData] = field(default=None)
    
