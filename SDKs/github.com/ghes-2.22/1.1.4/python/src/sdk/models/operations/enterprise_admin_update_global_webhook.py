from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdateGlobalWebhookPathParams:
    hook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminUpdateGlobalWebhookHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_type' }})
    insecure_ssl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insecure_ssl' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateGlobalWebhookRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    config: Optional[EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    

@dataclass
class EnterpriseAdminUpdateGlobalWebhookRequest:
    path_params: EnterpriseAdminUpdateGlobalWebhookPathParams = field(default=None)
    headers: EnterpriseAdminUpdateGlobalWebhookHeaders = field(default=None)
    request: Optional[EnterpriseAdminUpdateGlobalWebhookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdateGlobalWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    global_hook_2: Optional[shared.GlobalHook2] = field(default=None)
    
