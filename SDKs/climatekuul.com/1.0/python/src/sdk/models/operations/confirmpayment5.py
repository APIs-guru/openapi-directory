from dataclasses import dataclass, field
from typing import Optional
CONFIRM_PAYMENT5_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class ConfirmPayment5RequestBody:
    api_key_l1: str = field(default=None, metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = field(default=None, metadata={'form': { 'field_name': 'apiKey_l2' }})
    confirm_payment: str = field(default=None, metadata={'form': { 'field_name': 'confirmPayment' }})
    payment_id: int = field(default=None, metadata={'form': { 'field_name': 'paymentID' }})
    transaction_id: str = field(default=None, metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclass
class ConfirmPayment5Request:
    server_url: Optional[str] = field(default=None)
    request: Optional[ConfirmPayment5RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class ConfirmPayment5Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
