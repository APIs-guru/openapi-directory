from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SalesCreditNotesGetResponse:
    content_type: str = field(default=None)
    page_result_sales_credit_note_query_dto_: Optional[shared.PageResultSalesCreditNoteQueryDto] = field(default=None)
    status_code: int = field(default=None)
    
