from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class QuotePostRequest:
    request: shared.QuoteDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class QuotePostResponse:
    content_type: str = field()
    status_code: int = field()
    quote_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
