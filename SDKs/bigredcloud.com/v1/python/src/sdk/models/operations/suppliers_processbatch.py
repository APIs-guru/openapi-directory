from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class SuppliersProcessBatchRequest:
    request: List[shared.BatchItemSupplierDto] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SuppliersProcessBatchResponse:
    content_type: str = field()
    status_code: int = field()
    suppliers_process_batch_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
