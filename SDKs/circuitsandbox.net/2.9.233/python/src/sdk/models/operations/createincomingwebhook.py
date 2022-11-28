from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateIncomingWebhookPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateIncomingWebhookQueryParams:
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateIncomingWebhookSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateIncomingWebhookRequest:
    path_params: CreateIncomingWebhookPathParams = field()
    query_params: CreateIncomingWebhookQueryParams = field()
    security: CreateIncomingWebhookSecurity = field()
    

@dataclass
class CreateIncomingWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    incoming_webhook: Optional[Any] = field(default=None)
    
