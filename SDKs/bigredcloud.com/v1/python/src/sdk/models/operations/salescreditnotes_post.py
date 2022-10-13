from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SalesCreditNotesPostRequest:
    request: shared.SalesInvoiceCreditNoteDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SalesCreditNotesPostResponse:
    content_type: str = field(default=None)
    sales_credit_notes_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
