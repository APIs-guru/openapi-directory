from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PlayerSearchQueryParams:
    search_term: str = field(metadata={'query_param': { 'field_name': 'searchTerm', 'style': 'form', 'explode': True }})
    position: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class PlayerSearchRequest:
    query_params: PlayerSearchQueryParams = field()
    

@dataclass
class PlayerSearchResponse:
    content_type: str = field()
    status_code: int = field()
    player_search_results: Optional[List[shared.PlayerSearchResult]] = field(default=None)
    
