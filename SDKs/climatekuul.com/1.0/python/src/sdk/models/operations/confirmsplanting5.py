from dataclasses import dataclass, field
from typing import Optional


CONFIRMS_PLANTING5_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class ConfirmsPlanting5RequestBody:
    api_key_l1: str = field(metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = field(metadata={'form': { 'field_name': 'apiKey_l2' }})
    confirm_planting: str = field(metadata={'form': { 'field_name': 'confirmPlanting' }})
    transaction_id: str = field(metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclass
class ConfirmsPlanting5Request:
    request: Optional[ConfirmsPlanting5RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ConfirmsPlanting5Response:
    content_type: str = field()
    status_code: int = field()
    
