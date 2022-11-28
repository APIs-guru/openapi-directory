from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SalesCreditNotesGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_sales_credit_note_query_dto_: Optional[shared.PageResultSalesCreditNoteQueryDto] = field(default=None)
    
