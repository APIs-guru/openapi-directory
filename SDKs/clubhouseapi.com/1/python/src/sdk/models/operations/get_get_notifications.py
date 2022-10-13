from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGetNotificationsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetNotificationsRequest:
    query_params: GetGetNotificationsQueryParams = field(default=None)
    

@dataclass
class GetGetNotificationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
