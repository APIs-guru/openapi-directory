from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendTokenHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendTokenRequest:
    headers: SendTokenHeaders = field(default=None)
    request: shared.SendTokenRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    send_token: Optional[shared.SendToken] = field(default=None)
    
