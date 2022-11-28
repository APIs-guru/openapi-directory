from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SalesInvoicesPutPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SalesInvoicesPutRequest:
    path_params: SalesInvoicesPutPathParams = field()
    request: shared.SalesInvoiceCreditNoteDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SalesInvoicesPutResponse:
    content_type: str = field()
    status_code: int = field()
    sales_invoices_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
