from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CreateIncomingWebhookPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateIncomingWebhookQueryParams:
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateIncomingWebhookSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateIncomingWebhookRequest:
    path_params: CreateIncomingWebhookPathParams = field(default=None)
    query_params: CreateIncomingWebhookQueryParams = field(default=None)
    security: CreateIncomingWebhookSecurity = field(default=None)
    

@dataclass
class CreateIncomingWebhookResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    incoming_webhook: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
