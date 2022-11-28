from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminCreateImpersonationOAuthTokenPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminCreateImpersonationOAuthTokenRequestBody:
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    

@dataclass
class EnterpriseAdminCreateImpersonationOAuthTokenRequest:
    path_params: EnterpriseAdminCreateImpersonationOAuthTokenPathParams = field()
    request: Optional[EnterpriseAdminCreateImpersonationOAuthTokenRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminCreateImpersonationOAuthTokenResponse:
    content_type: str = field()
    status_code: int = field()
    authorization: Optional[shared.Authorization] = field(default=None)
    
