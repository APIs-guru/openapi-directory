from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PurchasesProcessBatchRequest:
    request: List[shared.BatchItemPurchaseDto] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PurchasesProcessBatchResponse:
    content_type: str = field()
    status_code: int = field()
    purchases_process_batch_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
