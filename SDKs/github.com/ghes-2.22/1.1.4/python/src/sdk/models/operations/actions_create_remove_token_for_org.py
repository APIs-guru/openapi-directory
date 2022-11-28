from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsCreateRemoveTokenForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsCreateRemoveTokenForOrgRequest:
    path_params: ActionsCreateRemoveTokenForOrgPathParams = field()
    

@dataclass
class ActionsCreateRemoveTokenForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_token: Optional[shared.AuthenticationToken] = field(default=None)
    
