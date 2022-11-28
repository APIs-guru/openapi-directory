from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GistsListForksPathParams:
    gist_id: str = field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GistsListForksQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GistsListForksRequest:
    path_params: GistsListForksPathParams = field()
    query_params: GistsListForksQueryParams = field()
    

@dataclass
class GistsListForksResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    gist_simples: Optional[List[shared.GistSimple]] = field(default=None)
    
