from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class SegmentListQueryParams:
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort_direction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    

@dataclass
class SegmentListRequest:
    query_params: SegmentListQueryParams = field(default=None)
    

@dataclass
class SegmentListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
