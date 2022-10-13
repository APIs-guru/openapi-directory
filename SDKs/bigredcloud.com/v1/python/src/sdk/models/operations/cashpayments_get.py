from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CashPaymentsGetResponse:
    content_type: str = field(default=None)
    page_result_cash_payment_query_dto_: Optional[shared.PageResultCashPaymentQueryDto] = field(default=None)
    status_code: int = field(default=None)
    
