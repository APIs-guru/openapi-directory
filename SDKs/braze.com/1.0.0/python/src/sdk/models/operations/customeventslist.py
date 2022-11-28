from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CustomEventsListQueryParams:
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class CustomEventsListRequest:
    query_params: CustomEventsListQueryParams = field()
    

@dataclass
class CustomEventsListResponse:
    content_type: str = field()
    status_code: int = field()
    
