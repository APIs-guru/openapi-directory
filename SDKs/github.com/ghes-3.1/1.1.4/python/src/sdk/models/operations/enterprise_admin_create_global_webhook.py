from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminCreateGlobalWebhookHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminCreateGlobalWebhookRequestBodyConfig:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_type' }})
    insecure_ssl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insecure_ssl' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminCreateGlobalWebhookRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    config: EnterpriseAdminCreateGlobalWebhookRequestBodyConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class EnterpriseAdminCreateGlobalWebhookRequest:
    headers: EnterpriseAdminCreateGlobalWebhookHeaders = field(default=None)
    request: Optional[EnterpriseAdminCreateGlobalWebhookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminCreateGlobalWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    global_hook: Optional[shared.GlobalHook] = field(default=None)
    
