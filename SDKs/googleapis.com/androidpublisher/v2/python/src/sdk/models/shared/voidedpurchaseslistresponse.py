from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class VoidedPurchasesListResponse:
    page_info: Optional[PageInfo] = field(default=None)
    token_pagination: Optional[TokenPagination] = field(default=None)
    voided_purchases: Optional[List[VoidedPurchase]] = field(default=None)
    
