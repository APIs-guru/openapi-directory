from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TrendingStickersQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    rating: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    

@dataclass
class TrendingStickersRequest:
    query_params: TrendingStickersQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class TrendingStickers200ApplicationJSON:
    data: Optional[List[shared.Gif]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    meta: Optional[shared.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    pagination: Optional[shared.Pagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    

@dataclass
class TrendingStickersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trending_stickers_200_application_json_object: Optional[TrendingStickers200ApplicationJSON] = field(default=None)
    
