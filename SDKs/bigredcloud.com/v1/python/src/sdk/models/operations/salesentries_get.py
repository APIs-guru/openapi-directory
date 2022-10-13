from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SalesEntriesGetResponse:
    content_type: str = field(default=None)
    page_result_sales_entry_query_dto_: Optional[shared.PageResultSalesEntryQueryDto] = field(default=None)
    status_code: int = field(default=None)
    
