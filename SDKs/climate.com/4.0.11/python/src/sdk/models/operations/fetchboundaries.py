from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class FetchBoundariesSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FetchBoundariesRequest:
    security: FetchBoundariesSecurity = field()
    request: Optional[shared.BoundariesQuery] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class FetchBoundariesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    boundaries: Optional[Any] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
