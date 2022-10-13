from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetAllowedActionsOrganizationPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetAllowedActionsOrganizationRequest:
    path_params: ActionsGetAllowedActionsOrganizationPathParams = field(default=None)
    

@dataclass
class ActionsGetAllowedActionsOrganizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    selected_actions: Optional[shared.SelectedActions] = field(default=None)
    
