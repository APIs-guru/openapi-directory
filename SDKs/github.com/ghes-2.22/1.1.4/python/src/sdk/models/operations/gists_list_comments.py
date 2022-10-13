from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GistsListCommentsPathParams:
    gist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GistsListCommentsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GistsListCommentsRequest:
    path_params: GistsListCommentsPathParams = field(default=None)
    query_params: GistsListCommentsQueryParams = field(default=None)
    

@dataclass
class GistsListCommentsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    gist_comments: Optional[List[shared.GistComment]] = field(default=None)
    
