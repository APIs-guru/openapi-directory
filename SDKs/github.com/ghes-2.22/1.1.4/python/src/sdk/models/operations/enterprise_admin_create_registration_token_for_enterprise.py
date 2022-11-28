from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminCreateRegistrationTokenForEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest:
    path_params: EnterpriseAdminCreateRegistrationTokenForEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_token: Optional[shared.AuthenticationToken] = field(default=None)
    
