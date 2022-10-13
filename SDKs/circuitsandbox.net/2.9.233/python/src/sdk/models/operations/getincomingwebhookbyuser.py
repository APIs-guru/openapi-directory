from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetIncomingWebhookByUserPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIncomingWebhookByUserQueryParams:
    pagesize: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    searchpointer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchpointer', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIncomingWebhookByUserSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetIncomingWebhookByUserRequest:
    path_params: GetIncomingWebhookByUserPathParams = field(default=None)
    query_params: GetIncomingWebhookByUserQueryParams = field(default=None)
    security: GetIncomingWebhookByUserSecurity = field(default=None)
    

@dataclass
class GetIncomingWebhookByUserResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    incoming_webhooks: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
