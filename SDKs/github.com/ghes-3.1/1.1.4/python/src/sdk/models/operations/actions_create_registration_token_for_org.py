from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsCreateRegistrationTokenForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsCreateRegistrationTokenForOrgRequest:
    path_params: ActionsCreateRegistrationTokenForOrgPathParams = field(default=None)
    

@dataclass
class ActionsCreateRegistrationTokenForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_token: Optional[shared.AuthenticationToken] = field(default=None)
    
