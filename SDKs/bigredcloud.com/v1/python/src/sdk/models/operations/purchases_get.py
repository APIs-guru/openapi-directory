from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PurchasesGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_purchase_query_dto_: Optional[shared.PageResultPurchaseQueryDto] = field(default=None)
    
