from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AccountGetPrefsSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountGetPrefsRequest:
    security: AccountGetPrefsSecurity = field()
    

@dataclass
class AccountGetPrefsResponse:
    content_type: str = field()
    status_code: int = field()
    preferences: Optional[dict[str, Any]] = field(default=None)
    
