from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceRequest:
    request: shared.SalesInvoiceCreditNoteDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceResponse:
    content_type: str = field()
    status_code: int = field()
    sales_invoices_post_create_sale_invoice_with_generating_reference_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
