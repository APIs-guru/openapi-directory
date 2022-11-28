from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ReposGetContentPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetContentQueryParams:
    ref: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ref', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposGetContentRequest:
    path_params: ReposGetContentPathParams = field()
    query_params: ReposGetContentQueryParams = field()
    

@dataclass
class ReposGetContentResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    repos_get_content_200_application_json_one_of: Optional[Any] = field(default=None)
    
