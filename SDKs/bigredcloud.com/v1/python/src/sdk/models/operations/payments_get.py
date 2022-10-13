from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PaymentsGetResponse:
    content_type: str = field(default=None)
    page_result_payment_query_dto_: Optional[shared.PageResultPaymentQueryDto] = field(default=None)
    status_code: int = field(default=None)
    
