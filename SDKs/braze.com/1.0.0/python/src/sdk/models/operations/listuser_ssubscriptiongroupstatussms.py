from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ListUserSSubscriptionGroupStatusSmsQueryParams:
    external_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'external_id', 'style': 'form', 'explode': True }})
    phone: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phone', 'style': 'form', 'explode': True }})
    subscription_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subscription_group_id', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUserSSubscriptionGroupStatusSmsRequest:
    query_params: ListUserSSubscriptionGroupStatusSmsQueryParams = field()
    

@dataclass
class ListUserSSubscriptionGroupStatusSmsResponse:
    content_type: str = field()
    status_code: int = field()
    
