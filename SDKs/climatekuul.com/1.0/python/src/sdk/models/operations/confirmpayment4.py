from dataclasses import dataclass, field
from typing import Optional


CONFIRM_PAYMENT4_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class ConfirmPayment4RequestBody:
    api_key_l1: str = field(metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = field(metadata={'form': { 'field_name': 'apiKey_l2' }})
    confirm_payment: str = field(metadata={'form': { 'field_name': 'confirmPayment' }})
    payment_id: int = field(metadata={'form': { 'field_name': 'paymentID' }})
    transaction_id: str = field(metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclass
class ConfirmPayment4Request:
    request: Optional[ConfirmPayment4RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ConfirmPayment4Response:
    content_type: str = field()
    status_code: int = field()
    
