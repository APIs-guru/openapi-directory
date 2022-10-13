from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminCreateRegistrationTokenForEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest:
    path_params: EnterpriseAdminCreateRegistrationTokenForEnterprisePathParams = field(default=None)
    

@dataclass
class EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_token: Optional[shared.AuthenticationToken] = field(default=None)
    
