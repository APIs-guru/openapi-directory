from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class QuotePostCreateQuoteWithGeneratingReferenceRequest:
    request: shared.QuoteDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class QuotePostCreateQuoteWithGeneratingReferenceResponse:
    content_type: str = field(default=None)
    quote_post_create_quote_with_generating_reference_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
