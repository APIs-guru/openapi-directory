from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SalesInvoicesPutPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SalesInvoicesPutRequest:
    path_params: SalesInvoicesPutPathParams = field(default=None)
    request: shared.SalesInvoiceCreditNoteDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SalesInvoicesPutResponse:
    content_type: str = field(default=None)
    sales_invoices_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
