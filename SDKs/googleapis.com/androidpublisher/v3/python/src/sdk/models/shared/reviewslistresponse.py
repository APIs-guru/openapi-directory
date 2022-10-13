from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pageinfo
from . import review
from . import tokenpagination


@dataclass_json
@dataclass
class ReviewsListResponse:
    page_info: Optional[pageinfo.PageInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageInfo' }})
    reviews: Optional[List[review.Review]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviews' }})
    token_pagination: Optional[tokenpagination.TokenPagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenPagination' }})
    
