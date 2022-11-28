from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2SearchDestinyEntitiesPathParams:
    search_term: str = field(metadata={'path_param': { 'field_name': 'searchTerm', 'style': 'simple', 'explode': False }})
    type: str = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2SearchDestinyEntitiesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class Destiny2SearchDestinyEntitiesRequest:
    path_params: Destiny2SearchDestinyEntitiesPathParams = field()
    query_params: Destiny2SearchDestinyEntitiesQueryParams = field()
    

@dataclass
class Destiny2SearchDestinyEntitiesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
