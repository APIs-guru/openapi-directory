from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CollectionListingsAllPathParams:
    ecosystem_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionListingsAllQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class CollectionListingsAllRequest:
    path_params: CollectionListingsAllPathParams = field(default=None)
    query_params: CollectionListingsAllQueryParams = field(default=None)
    

@dataclass
class CollectionListingsAllResponse:
    content_type: str = field(default=None)
    get_listings_response: Optional[shared.GetListingsResponse] = field(default=None)
    status_code: int = field(default=None)
    
