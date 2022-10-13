from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeletePreReceiveHookPathParams:
    pre_receive_hook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeletePreReceiveHookRequest:
    path_params: EnterpriseAdminDeletePreReceiveHookPathParams = field(default=None)
    

@dataclass
class EnterpriseAdminDeletePreReceiveHookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
