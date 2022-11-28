from dataclasses import dataclass, field
from typing import Optional


CONFIRM_PAYMENT_OF_TRANSACTION_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class ConfirmPaymentOfTransactionRequestBody:
    confirm_transaction: str = field(metadata={'form': { 'field_name': 'confirmTransaction' }})
    transaction_id: str = field(metadata={'form': { 'field_name': 'transaction_id' }})
    

@dataclass
class ConfirmPaymentOfTransactionRequest:
    request: Optional[ConfirmPaymentOfTransactionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ConfirmPaymentOfTransactionResponse:
    content_type: str = field()
    status_code: int = field()
    
