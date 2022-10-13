from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminSetAllowedActionsEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminSetAllowedActionsEnterpriseRequest:
    path_params: EnterpriseAdminSetAllowedActionsEnterprisePathParams = field(default=None)
    request: Optional[shared.SelectedActions] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSetAllowedActionsEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
