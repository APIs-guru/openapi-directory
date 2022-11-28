from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReviewsListResponse:
    r"""ReviewsListResponse
    Response listing reviews.
    """
    
    page_info: Optional[PageInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageInfo') }})
    reviews: Optional[List[Review]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviews') }})
    token_pagination: Optional[TokenPagination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenPagination') }})
    
