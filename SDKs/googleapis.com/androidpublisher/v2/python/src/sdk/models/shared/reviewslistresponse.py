from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ReviewsListResponse:
    page_info: Optional[PageInfo] = field(default=None)
    reviews: Optional[List[Review]] = field(default=None)
    token_pagination: Optional[TokenPagination] = field(default=None)
    
