from dataclasses import dataclass, field
from typing import Optional


CONFIRM_PAYMENT_OF_TRANSACTION4_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class ConfirmPaymentOfTransaction4RequestBody:
    confirm_transaction: str = field(metadata={'form': { 'field_name': 'confirmTransaction' }})
    transaction_id: str = field(metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclass
class ConfirmPaymentOfTransaction4Request:
    request: Optional[ConfirmPaymentOfTransaction4RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ConfirmPaymentOfTransaction4Response:
    content_type: str = field()
    status_code: int = field()
    
