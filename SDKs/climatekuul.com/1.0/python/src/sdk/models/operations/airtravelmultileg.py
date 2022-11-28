from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


AIRTRAVEL_MULTILEG_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class AirtravelMultilegRequest:
    request: shared.AirtravelMultilegRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class AirtravelMultilegResponse:
    content_type: str = field()
    status_code: int = field()
    
