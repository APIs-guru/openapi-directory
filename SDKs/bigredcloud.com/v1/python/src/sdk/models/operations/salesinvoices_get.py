from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SalesInvoicesGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_sales_invoice_query_dto_: Optional[shared.PageResultSalesInvoiceQueryDto] = field(default=None)
    
