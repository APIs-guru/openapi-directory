from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pageinfo
from . import tokenpagination
from . import voidedpurchase


@dataclass_json
@dataclass
class VoidedPurchasesListResponse:
    page_info: Optional[pageinfo.PageInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageInfo' }})
    token_pagination: Optional[tokenpagination.TokenPagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenPagination' }})
    voided_purchases: Optional[List[voidedpurchase.VoidedPurchase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voidedPurchases' }})
    
