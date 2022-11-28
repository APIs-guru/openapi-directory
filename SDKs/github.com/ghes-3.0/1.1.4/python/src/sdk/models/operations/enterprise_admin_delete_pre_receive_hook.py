from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeletePreReceiveHookPathParams:
    pre_receive_hook_id: int = field(metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeletePreReceiveHookRequest:
    path_params: EnterpriseAdminDeletePreReceiveHookPathParams = field()
    

@dataclass
class EnterpriseAdminDeletePreReceiveHookResponse:
    content_type: str = field()
    status_code: int = field()
    
