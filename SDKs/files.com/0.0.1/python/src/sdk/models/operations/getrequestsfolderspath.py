from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetRequestsFoldersPathPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRequestsFoldersPathQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    mine: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'mine', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRequestsFoldersPathRequest:
    path_params: GetRequestsFoldersPathPathParams = field()
    query_params: GetRequestsFoldersPathQueryParams = field()
    

@dataclass
class GetRequestsFoldersPathResponse:
    content_type: str = field()
    status_code: int = field()
    request_entities: Optional[List[shared.RequestEntity]] = field(default=None)
    
