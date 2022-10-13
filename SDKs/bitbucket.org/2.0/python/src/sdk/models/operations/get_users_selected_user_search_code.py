from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetUsersSelectedUserSearchCodePathParams:
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersSelectedUserSearchCodeQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagelen: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagelen', 'style': 'form', 'explode': True }})
    search_query: str = field(default=None, metadata={'query_param': { 'field_name': 'search_query', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersSelectedUserSearchCodeRequest:
    path_params: GetUsersSelectedUserSearchCodePathParams = field(default=None)
    query_params: GetUsersSelectedUserSearchCodeQueryParams = field(default=None)
    

@dataclass
class GetUsersSelectedUserSearchCodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    search_result_page: Optional[shared.SearchResultPage] = field(default=None)
    
