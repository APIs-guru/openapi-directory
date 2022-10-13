from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsGetWebhookConfigForOrgPathParams:
    hook_id: int = field(default=None, metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsGetWebhookConfigForOrgRequest:
    path_params: OrgsGetWebhookConfigForOrgPathParams = field(default=None)
    

@dataclass
class OrgsGetWebhookConfigForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    webhook_config: Optional[shared.WebhookConfig] = field(default=None)
    
