from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CustomEventsAnalyticsQueryParams:
    app_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_id', 'style': 'form', 'explode': True }})
    ending_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ending_at', 'style': 'form', 'explode': True }})
    event: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'event', 'style': 'form', 'explode': True }})
    length: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    segment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'segment_id', 'style': 'form', 'explode': True }})
    unit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'unit', 'style': 'form', 'explode': True }})
    

@dataclass
class CustomEventsAnalyticsRequest:
    query_params: CustomEventsAnalyticsQueryParams = field(default=None)
    

@dataclass
class CustomEventsAnalyticsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
