from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
AIRTRAVEL_MULTILEG_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class AirtravelMultilegRequest:
    server_url: Optional[str] = field(default=None)
    request: shared.AirtravelMultilegRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AirtravelMultilegResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
