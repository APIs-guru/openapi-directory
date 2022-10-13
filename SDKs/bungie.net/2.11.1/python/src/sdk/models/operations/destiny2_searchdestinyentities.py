from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2SearchDestinyEntitiesPathParams:
    search_term: str = field(default=None, metadata={'path_param': { 'field_name': 'searchTerm', 'style': 'simple', 'explode': False }})
    type: str = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2SearchDestinyEntitiesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class Destiny2SearchDestinyEntitiesRequest:
    path_params: Destiny2SearchDestinyEntitiesPathParams = field(default=None)
    query_params: Destiny2SearchDestinyEntitiesQueryParams = field(default=None)
    

@dataclass
class Destiny2SearchDestinyEntitiesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
