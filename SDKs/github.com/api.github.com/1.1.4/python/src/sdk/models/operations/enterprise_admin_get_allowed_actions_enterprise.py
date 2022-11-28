from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetAllowedActionsEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetAllowedActionsEnterpriseRequest:
    path_params: EnterpriseAdminGetAllowedActionsEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminGetAllowedActionsEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    selected_actions: Optional[shared.SelectedActions] = field(default=None)
    
