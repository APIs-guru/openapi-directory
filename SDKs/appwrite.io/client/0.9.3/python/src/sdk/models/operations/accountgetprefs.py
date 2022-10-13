from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class AccountGetPrefsSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountGetPrefsRequest:
    security: AccountGetPrefsSecurity = field(default=None)
    

@dataclass
class AccountGetPrefsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preferences: Optional[dict[str, Any]] = field(default=None)
    
