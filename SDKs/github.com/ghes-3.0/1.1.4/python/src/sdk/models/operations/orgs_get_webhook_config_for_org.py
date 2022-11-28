from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsGetWebhookConfigForOrgPathParams:
    hook_id: int = field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsGetWebhookConfigForOrgRequest:
    path_params: OrgsGetWebhookConfigForOrgPathParams = field()
    

@dataclass
class OrgsGetWebhookConfigForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    webhook_config: Optional[shared.WebhookConfig] = field(default=None)
    
