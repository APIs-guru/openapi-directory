from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SegmentDetailsQueryParams:
    segment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'segment_id', 'style': 'form', 'explode': True }})
    

@dataclass
class SegmentDetailsRequest:
    query_params: SegmentDetailsQueryParams = field(default=None)
    

@dataclass
class SegmentDetailsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
