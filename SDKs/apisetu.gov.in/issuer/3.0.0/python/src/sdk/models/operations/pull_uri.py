from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PullURIHeaders:
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    x_digilocker_hmac: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-digilocker-hmac', 'style': 'simple', 'explode': False }})
    

@dataclass
class PullURIRequest:
    headers: PullURIHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    

@dataclass
class PullURIResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
