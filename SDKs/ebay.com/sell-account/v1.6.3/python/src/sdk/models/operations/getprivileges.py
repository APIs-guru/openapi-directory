from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPrivilegesSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPrivilegesRequest:
    security: GetPrivilegesSecurity = field(default=None)
    

@dataclass
class GetPrivilegesResponse:
    content_type: str = field(default=None)
    selling_privileges: Optional[shared.SellingPrivileges] = field(default=None)
    status_code: int = field(default=None)
    
