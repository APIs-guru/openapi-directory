from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetGlobalWebhookPathParams:
    hook_id: int = field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetGlobalWebhookHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetGlobalWebhookRequest:
    headers: EnterpriseAdminGetGlobalWebhookHeaders = field()
    path_params: EnterpriseAdminGetGlobalWebhookPathParams = field()
    

@dataclass
class EnterpriseAdminGetGlobalWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    global_hook: Optional[shared.GlobalHook] = field(default=None)
    
