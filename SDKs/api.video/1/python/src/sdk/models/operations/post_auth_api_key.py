from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAuthAPIKeyRequest:
    request: Optional[shared.AuthenticatePayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAuthAPIKeyResponse:
    content_type: str = field()
    status_code: int = field()
    access_token: Optional[shared.AccessToken] = field(default=None)
    bad_request: Optional[shared.BadRequest] = field(default=None)
    
