from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ProductsProcessBatchRequest:
    request: List[shared.BatchItemProductDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ProductsProcessBatchResponse:
    content_type: str = field(default=None)
    products_process_batch_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
