from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGetEventsQueryParams:
    is_filtered: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_filtered', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetEventsRequest:
    query_params: GetGetEventsQueryParams = field(default=None)
    

@dataclass
class GetGetEventsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
