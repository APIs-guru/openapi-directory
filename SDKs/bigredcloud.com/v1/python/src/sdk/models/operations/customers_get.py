from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CustomersGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_customer_query_dto_: Optional[shared.PageResultCustomerQueryDto] = field(default=None)
    
