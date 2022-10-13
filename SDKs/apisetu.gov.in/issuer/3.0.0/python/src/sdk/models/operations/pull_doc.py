from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PullDocHeaders:
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type' }})
    x_digilocker_hmac: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-digilocker-hmac' }})
    

@dataclass
class PullDocRequest:
    headers: PullDocHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    

@dataclass
class PullDocResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
