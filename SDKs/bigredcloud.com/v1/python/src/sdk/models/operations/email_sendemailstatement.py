from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class EmailSendEmailStatementRequest:
    request: shared.EmailStatementDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EmailSendEmailStatementResponse:
    content_type: str = field(default=None)
    email_send_email_statement_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
