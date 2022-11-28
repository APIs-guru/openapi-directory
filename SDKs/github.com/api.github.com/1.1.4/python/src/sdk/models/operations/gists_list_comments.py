from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GistsListCommentsPathParams:
    gist_id: str = field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GistsListCommentsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GistsListCommentsRequest:
    path_params: GistsListCommentsPathParams = field()
    query_params: GistsListCommentsQueryParams = field()
    

@dataclass
class GistsListCommentsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    gist_comments: Optional[List[shared.GistComment]] = field(default=None)
    
