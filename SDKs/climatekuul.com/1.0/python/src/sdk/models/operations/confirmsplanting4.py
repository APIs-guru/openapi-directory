from dataclasses import dataclass, field
from typing import Optional


CONFIRMS_PLANTING4_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class ConfirmsPlanting4RequestBody:
    api_key_l1: str = field(metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = field(metadata={'form': { 'field_name': 'apiKey_l2' }})
    confirm_planting: str = field(metadata={'form': { 'field_name': 'confirmPlanting' }})
    transaction_id: str = field(metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclass
class ConfirmsPlanting4Request:
    request: Optional[ConfirmsPlanting4RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ConfirmsPlanting4Response:
    content_type: str = field()
    status_code: int = field()
    
