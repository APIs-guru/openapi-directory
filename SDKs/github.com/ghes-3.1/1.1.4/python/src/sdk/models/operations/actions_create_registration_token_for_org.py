from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsCreateRegistrationTokenForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsCreateRegistrationTokenForOrgRequest:
    path_params: ActionsCreateRegistrationTokenForOrgPathParams = field()
    

@dataclass
class ActionsCreateRegistrationTokenForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_token: Optional[shared.AuthenticationToken] = field(default=None)
    
