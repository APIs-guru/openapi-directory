from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetPreReceiveHookPathParams:
    pre_receive_hook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetPreReceiveHookRequest:
    path_params: EnterpriseAdminGetPreReceiveHookPathParams = field(default=None)
    

@dataclass
class EnterpriseAdminGetPreReceiveHookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    pre_receive_hook: Optional[shared.PreReceiveHook] = field(default=None)
    
