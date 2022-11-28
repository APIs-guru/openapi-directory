from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TrendingStickersQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    rating: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class TrendingStickers200ApplicationJSON:
    data: Optional[List[shared.Gif]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: Optional[shared.Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    pagination: Optional[shared.Pagination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass
class TrendingStickersRequest:
    query_params: TrendingStickersQueryParams = field()
    

@dataclass
class TrendingStickersResponse:
    content_type: str = field()
    status_code: int = field()
    trending_stickers_200_application_json_object: Optional[TrendingStickers200ApplicationJSON] = field(default=None)
    
