from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1SalesCreditNotesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1SalesCreditNotesIDRequest:
    path_params: GetV1SalesCreditNotesIDPathParams = field()
    

@dataclass
class GetV1SalesCreditNotesIDResponse:
    content_type: str = field()
    status_code: int = field()
    sales_invoice_credit_note_dto: Optional[shared.SalesInvoiceCreditNoteDto] = field(default=None)
    
