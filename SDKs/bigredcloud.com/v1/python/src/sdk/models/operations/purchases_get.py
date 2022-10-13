from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PurchasesGetResponse:
    content_type: str = field(default=None)
    page_result_purchase_query_dto_: Optional[shared.PageResultPurchaseQueryDto] = field(default=None)
    status_code: int = field(default=None)
    
