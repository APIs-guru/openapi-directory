from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SalesRepGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_sale_reps_dto_: Optional[shared.PageResultSaleRepsDto] = field(default=None)
    
