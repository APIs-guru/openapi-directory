from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminCreateImpersonationOAuthTokenPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminCreateImpersonationOAuthTokenRequestBody:
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    

@dataclass
class EnterpriseAdminCreateImpersonationOAuthTokenRequest:
    path_params: EnterpriseAdminCreateImpersonationOAuthTokenPathParams = field(default=None)
    request: Optional[EnterpriseAdminCreateImpersonationOAuthTokenRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminCreateImpersonationOAuthTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authorization: Optional[shared.Authorization] = field(default=None)
    
