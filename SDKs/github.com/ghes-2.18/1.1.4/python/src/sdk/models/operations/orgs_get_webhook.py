from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsGetWebhookPathParams:
    hook_id: int = field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsGetWebhookRequest:
    path_params: OrgsGetWebhookPathParams = field()
    

@dataclass
class OrgsGetWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    org_hook: Optional[shared.OrgHook] = field(default=None)
    
