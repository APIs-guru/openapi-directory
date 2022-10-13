from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class QuoteProcessBatchRequest:
    request: List[shared.BatchItemQuoteDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class QuoteProcessBatchResponse:
    content_type: str = field(default=None)
    quote_process_batch_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
