from dataclasses import dataclass, field
from typing import Optional
CONFIRMS_PLANTING2_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class ConfirmsPlanting2RequestBody:
    api_key_l1: str = field(default=None, metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = field(default=None, metadata={'form': { 'field_name': 'apiKey_l2' }})
    confirm_planting: str = field(default=None, metadata={'form': { 'field_name': 'confirmPlanting' }})
    transaction_id: str = field(default=None, metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclass
class ConfirmsPlanting2Request:
    server_url: Optional[str] = field(default=None)
    request: Optional[ConfirmsPlanting2RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class ConfirmsPlanting2Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
