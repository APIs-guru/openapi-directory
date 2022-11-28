from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CategoryListingsAllPathParams:
    ecosystem_id: str = field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CategoryListingsAllQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class CategoryListingsAllRequest:
    path_params: CategoryListingsAllPathParams = field()
    query_params: CategoryListingsAllQueryParams = field()
    

@dataclass
class CategoryListingsAllResponse:
    content_type: str = field()
    status_code: int = field()
    get_listings_response: Optional[shared.GetListingsResponse] = field(default=None)
    
