from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SalesGetResponse:
    content_type: str = field(default=None)
    page_result_sales_query_dto_: Optional[shared.PageResultSalesQueryDto] = field(default=None)
    status_code: int = field(default=None)
    
