from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SalesInvoicesPostRequest:
    request: shared.SalesInvoiceCreditNoteDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SalesInvoicesPostResponse:
    content_type: str = field(default=None)
    sales_invoices_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
