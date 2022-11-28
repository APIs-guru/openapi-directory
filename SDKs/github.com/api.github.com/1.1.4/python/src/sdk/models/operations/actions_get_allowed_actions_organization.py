from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetAllowedActionsOrganizationPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetAllowedActionsOrganizationRequest:
    path_params: ActionsGetAllowedActionsOrganizationPathParams = field()
    

@dataclass
class ActionsGetAllowedActionsOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    selected_actions: Optional[shared.SelectedActions] = field(default=None)
    
