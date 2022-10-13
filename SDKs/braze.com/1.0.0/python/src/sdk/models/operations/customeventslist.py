from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class CustomEventsListQueryParams:
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class CustomEventsListRequest:
    query_params: CustomEventsListQueryParams = field(default=None)
    

@dataclass
class CustomEventsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
