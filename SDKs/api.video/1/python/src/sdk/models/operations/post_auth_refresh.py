from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAuthRefreshRequest:
    request: Optional[shared.RefreshTokenPayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAuthRefreshResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    access_token: Optional[shared.AccessToken] = field(default=None)
    bad_request: Optional[shared.BadRequest] = field(default=None)
    
