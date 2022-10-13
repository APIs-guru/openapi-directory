from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ListUserSSubscriptionGroupStatusSmsQueryParams:
    external_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'external_id', 'style': 'form', 'explode': True }})
    phone: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phone', 'style': 'form', 'explode': True }})
    subscription_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subscription_group_id', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUserSSubscriptionGroupStatusSmsRequest:
    query_params: ListUserSSubscriptionGroupStatusSmsQueryParams = field(default=None)
    

@dataclass
class ListUserSSubscriptionGroupStatusSmsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
