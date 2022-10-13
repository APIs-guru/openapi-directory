from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTokenHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': True }})
    

@dataclass
class GetTokenRequest:
    headers: GetTokenHeaders = field(default=None)
    request: shared.GetTokenRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_token: Optional[shared.GetToken] = field(default=None)
    
