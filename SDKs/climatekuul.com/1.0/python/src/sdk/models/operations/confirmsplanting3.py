from dataclasses import dataclass, field
from typing import Optional


CONFIRMS_PLANTING3_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class ConfirmsPlanting3RequestBody:
    api_key_l1: str = field(metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = field(metadata={'form': { 'field_name': 'apiKey_l2' }})
    confirm_planting: str = field(metadata={'form': { 'field_name': 'confirmPlanting' }})
    transaction_id: str = field(metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclass
class ConfirmsPlanting3Request:
    request: Optional[ConfirmsPlanting3RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ConfirmsPlanting3Response:
    content_type: str = field()
    status_code: int = field()
    
