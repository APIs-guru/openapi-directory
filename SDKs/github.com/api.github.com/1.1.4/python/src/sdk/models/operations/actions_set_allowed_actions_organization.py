from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsSetAllowedActionsOrganizationPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsSetAllowedActionsOrganizationRequest:
    path_params: ActionsSetAllowedActionsOrganizationPathParams = field(default=None)
    request: Optional[shared.SelectedActions] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsSetAllowedActionsOrganizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
