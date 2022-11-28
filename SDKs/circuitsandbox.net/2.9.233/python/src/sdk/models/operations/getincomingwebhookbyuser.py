from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetIncomingWebhookByUserPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIncomingWebhookByUserQueryParams:
    pagesize: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    searchpointer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchpointer', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIncomingWebhookByUserSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetIncomingWebhookByUserRequest:
    path_params: GetIncomingWebhookByUserPathParams = field()
    query_params: GetIncomingWebhookByUserQueryParams = field()
    security: GetIncomingWebhookByUserSecurity = field()
    

@dataclass
class GetIncomingWebhookByUserResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    incoming_webhooks: Optional[List[Any]] = field(default=None)
    
