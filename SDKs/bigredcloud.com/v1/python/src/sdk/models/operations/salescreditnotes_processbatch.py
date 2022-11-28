from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class SalesCreditNotesProcessBatchRequest:
    request: List[shared.BatchItemSalesInvoiceCreditNoteDto] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SalesCreditNotesProcessBatchResponse:
    content_type: str = field()
    status_code: int = field()
    sales_credit_notes_process_batch_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
