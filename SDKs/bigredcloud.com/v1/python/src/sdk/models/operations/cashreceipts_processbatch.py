from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CashReceiptsProcessBatchRequest:
    request: List[shared.BatchItemCashReceiptDto] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CashReceiptsProcessBatchResponse:
    content_type: str = field()
    status_code: int = field()
    cash_receipts_process_batch_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
