from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SegmentAnalyticsQueryParams:
    ending_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ending_at', 'style': 'form', 'explode': True }})
    length: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    segment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'segment_id', 'style': 'form', 'explode': True }})
    

@dataclass
class SegmentAnalyticsRequest:
    query_params: SegmentAnalyticsQueryParams = field()
    

@dataclass
class SegmentAnalyticsResponse:
    content_type: str = field()
    status_code: int = field()
    
