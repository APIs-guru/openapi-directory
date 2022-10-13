from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetGlobalWebhookPathParams:
    hook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetGlobalWebhookHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept' }})
    

@dataclass
class EnterpriseAdminGetGlobalWebhookRequest:
    path_params: EnterpriseAdminGetGlobalWebhookPathParams = field(default=None)
    headers: EnterpriseAdminGetGlobalWebhookHeaders = field(default=None)
    

@dataclass
class EnterpriseAdminGetGlobalWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    global_hook: Optional[shared.GlobalHook] = field(default=None)
    
