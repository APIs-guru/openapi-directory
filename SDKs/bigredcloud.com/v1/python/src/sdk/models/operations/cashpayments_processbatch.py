from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CashPaymentsProcessBatchRequest:
    request: List[shared.BatchItemCashPaymentDto] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CashPaymentsProcessBatchResponse:
    content_type: str = field()
    status_code: int = field()
    cash_payments_process_batch_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
