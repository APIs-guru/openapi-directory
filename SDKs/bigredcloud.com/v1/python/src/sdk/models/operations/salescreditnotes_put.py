from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SalesCreditNotesPutPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SalesCreditNotesPutRequest:
    path_params: SalesCreditNotesPutPathParams = field()
    request: shared.SalesInvoiceCreditNoteDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SalesCreditNotesPutResponse:
    content_type: str = field()
    status_code: int = field()
    sales_credit_notes_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
