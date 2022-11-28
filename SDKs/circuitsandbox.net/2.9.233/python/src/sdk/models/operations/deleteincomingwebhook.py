from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteIncomingWebhookPathParams:
    webhook_id: str = field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteIncomingWebhookSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteIncomingWebhookRequest:
    path_params: DeleteIncomingWebhookPathParams = field()
    security: DeleteIncomingWebhookSecurity = field()
    

@dataclass
class DeleteIncomingWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    
