from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminPingGlobalWebhookPathParams:
    hook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminPingGlobalWebhookHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminPingGlobalWebhookRequest:
    path_params: EnterpriseAdminPingGlobalWebhookPathParams = field(default=None)
    headers: EnterpriseAdminPingGlobalWebhookHeaders = field(default=None)
    

@dataclass
class EnterpriseAdminPingGlobalWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
