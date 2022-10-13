from dataclasses import dataclass, field
from typing import Optional
CONFIRM_PAYMENT_OF_TRANSACTION1_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class ConfirmPaymentOfTransaction1RequestBody:
    confirm_transaction: str = field(default=None, metadata={'form': { 'field_name': 'confirmTransaction' }})
    transaction_id: str = field(default=None, metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclass
class ConfirmPaymentOfTransaction1Request:
    server_url: Optional[str] = field(default=None)
    request: Optional[ConfirmPaymentOfTransaction1RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class ConfirmPaymentOfTransaction1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
