from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendTokenHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendTokenRequest:
    headers: SendTokenHeaders = field()
    request: shared.SendTokenRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendTokenResponse:
    content_type: str = field()
    status_code: int = field()
    send_token: Optional[shared.SendToken] = field(default=None)
    
