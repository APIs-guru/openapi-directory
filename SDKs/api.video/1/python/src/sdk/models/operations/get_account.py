from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountRequest:
    security: GetAccountSecurity = field(default=None)
    

@dataclass
class GetAccountResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    account: Optional[shared.Account] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
