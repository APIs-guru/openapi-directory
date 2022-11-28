from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class ListPromotionsMixinEnum(str, Enum):
    RELATED_LINKS = "related_links"

class ListPromotionsStatusEnum(str, Enum):
    CURRENT = "current"


@dataclass
class ListPromotionsQueryParams:
    context: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'context', 'style': 'form', 'explode': True }})
    mixin: Optional[List[ListPromotionsMixinEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'mixin', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    partner_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_id', 'style': 'form', 'explode': True }})
    partner_pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_pid', 'style': 'form', 'explode': True }})
    pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'pid', 'style': 'form', 'explode': True }})
    promoted_by: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'promoted_by', 'style': 'form', 'explode': True }})
    promoted_for: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'promoted_for', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    status: Optional[List[ListPromotionsStatusEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPromotionsRequest:
    query_params: ListPromotionsQueryParams = field()
    

@dataclass
class ListPromotionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
