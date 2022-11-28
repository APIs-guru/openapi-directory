from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class InappproductsListResponse:
    inappproduct: Optional[List[InAppProduct]] = field(default=None)
    kind: Optional[str] = field(default=None)
    page_info: Optional[PageInfo] = field(default=None)
    token_pagination: Optional[TokenPagination] = field(default=None)
    
