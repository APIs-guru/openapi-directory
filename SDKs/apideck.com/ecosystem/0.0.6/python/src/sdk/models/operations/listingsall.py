from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListingsAllPathParams:
    ecosystem_id: str = field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListingsAllQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    external_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'external_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class ListingsAllRequest:
    path_params: ListingsAllPathParams = field()
    query_params: ListingsAllQueryParams = field()
    

@dataclass
class ListingsAllResponse:
    content_type: str = field()
    status_code: int = field()
    get_listings_response: Optional[shared.GetListingsResponse] = field(default=None)
    
