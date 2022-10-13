from dataclasses import dataclass, field



@dataclass
class DeleteIncomingWebhookPathParams:
    webhook_id: str = field(default=None, metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteIncomingWebhookSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteIncomingWebhookRequest:
    path_params: DeleteIncomingWebhookPathParams = field(default=None)
    security: DeleteIncomingWebhookSecurity = field(default=None)
    

@dataclass
class DeleteIncomingWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
