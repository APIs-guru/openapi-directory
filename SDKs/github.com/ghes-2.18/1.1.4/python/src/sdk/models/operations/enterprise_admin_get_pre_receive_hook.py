from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetPreReceiveHookPathParams:
    pre_receive_hook_id: int = field(metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetPreReceiveHookRequest:
    path_params: EnterpriseAdminGetPreReceiveHookPathParams = field()
    

@dataclass
class EnterpriseAdminGetPreReceiveHookResponse:
    content_type: str = field()
    status_code: int = field()
    pre_receive_hook: Optional[shared.PreReceiveHook] = field(default=None)
    
