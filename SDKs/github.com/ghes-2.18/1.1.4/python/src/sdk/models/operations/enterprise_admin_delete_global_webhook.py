from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeleteGlobalWebhookPathParams:
    hook_id: int = field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeleteGlobalWebhookHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeleteGlobalWebhookRequest:
    headers: EnterpriseAdminDeleteGlobalWebhookHeaders = field()
    path_params: EnterpriseAdminDeleteGlobalWebhookPathParams = field()
    

@dataclass
class EnterpriseAdminDeleteGlobalWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    
