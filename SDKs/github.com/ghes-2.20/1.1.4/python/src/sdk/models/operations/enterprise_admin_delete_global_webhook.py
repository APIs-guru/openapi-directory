from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeleteGlobalWebhookPathParams:
    hook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeleteGlobalWebhookHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept' }})
    

@dataclass
class EnterpriseAdminDeleteGlobalWebhookRequest:
    path_params: EnterpriseAdminDeleteGlobalWebhookPathParams = field(default=None)
    headers: EnterpriseAdminDeleteGlobalWebhookHeaders = field(default=None)
    

@dataclass
class EnterpriseAdminDeleteGlobalWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
