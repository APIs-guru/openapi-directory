from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class EmailSendQuoteRequest:
    request: shared.EmailQuoteDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EmailSendQuoteResponse:
    content_type: str = field()
    status_code: int = field()
    email_send_quote_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
