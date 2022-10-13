from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class SalesEntriesProcessBatchRequest:
    request: List[shared.BatchItemSalesEntryDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SalesEntriesProcessBatchResponse:
    content_type: str = field(default=None)
    sales_entries_process_batch_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
