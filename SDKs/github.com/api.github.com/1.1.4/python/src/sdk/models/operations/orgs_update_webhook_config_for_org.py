from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class OrgsUpdateWebhookConfigForOrgPathParams:
    hook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class OrgsUpdateWebhookConfigForOrgRequestBody:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_type' }})
    insecure_ssl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insecure_ssl' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class OrgsUpdateWebhookConfigForOrgRequest:
    path_params: OrgsUpdateWebhookConfigForOrgPathParams = field(default=None)
    request: Optional[OrgsUpdateWebhookConfigForOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OrgsUpdateWebhookConfigForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    webhook_config: Optional[shared.WebhookConfig] = field(default=None)
    
