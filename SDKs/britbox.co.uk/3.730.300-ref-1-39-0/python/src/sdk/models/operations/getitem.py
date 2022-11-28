from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetItemPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
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
    path_params: GetItemPathParams = field()
    query_params: GetItemQueryParams = field()
    

@dataclass
class GetItemResponse:
    content_type: str = field()
    status_code: int = field()
    item_detail: Optional[shared.ItemDetail] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
