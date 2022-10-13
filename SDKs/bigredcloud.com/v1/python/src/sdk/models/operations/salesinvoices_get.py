from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SalesInvoicesGetResponse:
    content_type: str = field(default=None)
    page_result_sales_invoice_query_dto_: Optional[shared.PageResultSalesInvoiceQueryDto] = field(default=None)
    status_code: int = field(default=None)
    
