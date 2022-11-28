from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SalesEntriesGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_sales_entry_query_dto_: Optional[shared.PageResultSalesEntryQueryDto] = field(default=None)
    
