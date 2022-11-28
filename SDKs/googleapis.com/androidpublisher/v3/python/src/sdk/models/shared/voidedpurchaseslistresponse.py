from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VoidedPurchasesListResponse:
    r"""VoidedPurchasesListResponse
    Response for the voidedpurchases.list API.
    """
    
    page_info: Optional[PageInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageInfo') }})
    token_pagination: Optional[TokenPagination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenPagination') }})
    voided_purchases: Optional[List[VoidedPurchase]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voidedPurchases') }})
    
