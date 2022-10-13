from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetItemPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetItemExpandEnum(str, Enum):
    ALL = "all"
    CHILDREN = "children"
    ANCESTORS = "ancestors"
    PARENT = "parent"

class GetItemSelectSeasonEnum(str, Enum):
    FIRST = "first"
    LATEST = "latest"


@dataclass
class GetItemQueryParams:
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    expand: Optional[GetItemExpandEnum] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_rating: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_rating', 'style': 'form', 'explode': True }})
    segments: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': False }})
    select_season: Optional[GetItemSelectSeasonEnum] = field(default=None, metadata={'query_param': { 'field_name': 'select_season', 'style': 'form', 'explode': True }})
    sub: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sub', 'style': 'form', 'explode': True }})
    use_custom_id: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'use_custom_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItemRequest:
    path_params: GetItemPathParams = field(default=None)
    query_params: GetItemQueryParams = field(default=None)
    

@dataclass
class GetItemResponse:
    content_type: str = field(default=None)
    item_detail: Optional[shared.ItemDetail] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
