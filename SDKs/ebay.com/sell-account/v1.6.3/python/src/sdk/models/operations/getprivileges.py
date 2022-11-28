from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPrivilegesSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPrivilegesRequest:
    security: GetPrivilegesSecurity = field()
    

@dataclass
class GetPrivilegesResponse:
    content_type: str = field()
    status_code: int = field()
    selling_privileges: Optional[shared.SellingPrivileges] = field(default=None)
    
