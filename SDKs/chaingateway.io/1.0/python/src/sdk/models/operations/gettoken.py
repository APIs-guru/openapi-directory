from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTokenHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTokenRequest:
    headers: GetTokenHeaders = field()
    request: shared.GetTokenRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTokenResponse:
    content_type: str = field()
    status_code: int = field()
    get_token: Optional[shared.GetToken] = field(default=None)
    
