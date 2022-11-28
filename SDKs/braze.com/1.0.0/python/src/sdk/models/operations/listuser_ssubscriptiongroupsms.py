from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ListUserSSubscriptionGroupSmsQueryParams:
    external_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'external_id', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    phone: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phone', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUserSSubscriptionGroupSmsRequest:
    query_params: ListUserSSubscriptionGroupSmsQueryParams = field()
    

@dataclass
class ListUserSSubscriptionGroupSmsResponse:
    content_type: str = field()
    status_code: int = field()
    
