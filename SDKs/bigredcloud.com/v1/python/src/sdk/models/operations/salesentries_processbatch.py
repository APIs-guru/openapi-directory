from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class SalesEntriesProcessBatchRequest:
    request: List[shared.BatchItemSalesEntryDto] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SalesEntriesProcessBatchResponse:
    content_type: str = field()
    status_code: int = field()
    sales_entries_process_batch_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
