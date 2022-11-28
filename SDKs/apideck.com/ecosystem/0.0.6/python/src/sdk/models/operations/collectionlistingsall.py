from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CollectionListingsAllPathParams:
    ecosystem_id: str = field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionListingsAllQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class CollectionListingsAllRequest:
    path_params: CollectionListingsAllPathParams = field()
    query_params: CollectionListingsAllQueryParams = field()
    

@dataclass
class CollectionListingsAllResponse:
    content_type: str = field()
    status_code: int = field()
    get_listings_response: Optional[shared.GetListingsResponse] = field(default=None)
    
