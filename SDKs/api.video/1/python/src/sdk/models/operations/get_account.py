from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountRequest:
    security: GetAccountSecurity = field()
    

@dataclass
class GetAccountResponse:
    content_type: str = field()
    status_code: int = field()
    account: Optional[shared.Account] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
