from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class FetchBoundariesSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FetchBoundariesSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FetchBoundariesSecurity:
    option1: Optional[FetchBoundariesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FetchBoundariesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FetchBoundariesRequest:
    request: Optional[shared.BoundariesQuery] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: FetchBoundariesSecurity = field(default=None)
    

@dataclass
class FetchBoundariesResponse:
    boundaries: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
