from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminSetAllowedActionsEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminSetAllowedActionsEnterpriseRequest:
    path_params: EnterpriseAdminSetAllowedActionsEnterprisePathParams = field()
    request: Optional[shared.SelectedActions] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSetAllowedActionsEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    
