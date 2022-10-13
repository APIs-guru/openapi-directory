from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class MigrationsGetCommitAuthorsPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrationsGetCommitAuthorsQueryParams:
    since: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclass
class MigrationsGetCommitAuthorsRequest:
    path_params: MigrationsGetCommitAuthorsPathParams = field(default=None)
    query_params: MigrationsGetCommitAuthorsQueryParams = field(default=None)
    

@dataclass
class MigrationsGetCommitAuthorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    porter_authors: Optional[List[shared.PorterAuthor]] = field(default=None)
    
