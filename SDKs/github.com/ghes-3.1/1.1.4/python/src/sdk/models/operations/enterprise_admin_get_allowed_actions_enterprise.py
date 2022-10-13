from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetAllowedActionsEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetAllowedActionsEnterpriseRequest:
    path_params: EnterpriseAdminGetAllowedActionsEnterprisePathParams = field(default=None)
    

@dataclass
class EnterpriseAdminGetAllowedActionsEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    selected_actions: Optional[shared.SelectedActions] = field(default=None)
    
