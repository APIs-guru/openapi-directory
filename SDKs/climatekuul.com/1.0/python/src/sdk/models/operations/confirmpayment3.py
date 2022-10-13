from dataclasses import dataclass, field
from typing import Optional
CONFIRM_PAYMENT3_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class ConfirmPayment3RequestBody:
    api_key_l1: str = field(default=None, metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = field(default=None, metadata={'form': { 'field_name': 'apiKey_l2' }})
    confirm_payment: str = field(default=None, metadata={'form': { 'field_name': 'confirmPayment' }})
    payment_id: int = field(default=None, metadata={'form': { 'field_name': 'paymentID' }})
    transaction_id: str = field(default=None, metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclass
class ConfirmPayment3Request:
    server_url: Optional[str] = field(default=None)
    request: Optional[ConfirmPayment3RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class ConfirmPayment3Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
