from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CashReceiptsGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_cash_receipt_query_dto_: Optional[shared.PageResultCashReceiptQueryDto] = field(default=None)
    
