from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminPingGlobalWebhookPathParams:
    hook_id: int = field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminPingGlobalWebhookHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminPingGlobalWebhookRequest:
    headers: EnterpriseAdminPingGlobalWebhookHeaders = field()
    path_params: EnterpriseAdminPingGlobalWebhookPathParams = field()
    

@dataclass
class EnterpriseAdminPingGlobalWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    
