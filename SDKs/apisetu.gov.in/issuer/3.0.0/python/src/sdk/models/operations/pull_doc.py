from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PullDocHeaders:
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    x_digilocker_hmac: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-digilocker-hmac', 'style': 'simple', 'explode': False }})
    

@dataclass
class PullDocRequest:
    headers: PullDocHeaders = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    

@dataclass
class PullDocResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
