from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CashPaymentsPostRequest:
    request: shared.CashPaymentDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CashPaymentsPostResponse:
    content_type: str = field()
    status_code: int = field()
    cash_payments_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
