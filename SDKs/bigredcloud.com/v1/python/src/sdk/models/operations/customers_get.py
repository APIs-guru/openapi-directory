from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CustomersGetResponse:
    content_type: str = field(default=None)
    page_result_customer_query_dto_: Optional[shared.PageResultCustomerQueryDto] = field(default=None)
    status_code: int = field(default=None)
    
