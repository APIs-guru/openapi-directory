from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SegmentListQueryParams:
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort_direction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    

@dataclass
class SegmentListRequest:
    query_params: SegmentListQueryParams = field()
    

@dataclass
class SegmentListResponse:
    content_type: str = field()
    status_code: int = field()
    
