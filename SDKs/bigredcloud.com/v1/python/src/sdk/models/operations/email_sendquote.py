from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class EmailSendQuoteRequest:
    request: shared.EmailQuoteDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EmailSendQuoteResponse:
    content_type: str = field(default=None)
    email_send_quote_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
