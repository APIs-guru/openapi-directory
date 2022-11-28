from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class ListMasterbrandsMixinEnum(str, Enum):
    IMAGES = "images"

class ListMasterbrandsSortEnum(str, Enum):
    MID = "mid"

class ListMasterbrandsSortDirectionEnum(str, Enum):
    ASCENDING = "ascending"


@dataclass
class ListMasterbrandsQueryParams:
    mid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'mid', 'style': 'form', 'explode': True }})
    mixin: Optional[List[ListMasterbrandsMixinEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'mixin', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    partner_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_id', 'style': 'form', 'explode': True }})
    partner_pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_pid', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[ListMasterbrandsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_direction: Optional[ListMasterbrandsSortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMasterbrandsRequest:
    query_params: ListMasterbrandsQueryParams = field()
    

@dataclass
class ListMasterbrandsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
