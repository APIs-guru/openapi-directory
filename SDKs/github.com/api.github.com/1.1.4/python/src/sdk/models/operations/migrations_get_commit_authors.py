from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class MigrationsGetCommitAuthorsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrationsGetCommitAuthorsQueryParams:
    since: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclass
class MigrationsGetCommitAuthorsRequest:
    path_params: MigrationsGetCommitAuthorsPathParams = field()
    query_params: MigrationsGetCommitAuthorsQueryParams = field()
    

@dataclass
class MigrationsGetCommitAuthorsResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    porter_authors: Optional[List[shared.PorterAuthor]] = field(default=None)
    
