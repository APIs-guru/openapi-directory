from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetCommitPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetCommitQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposGetCommitRequest:
    path_params: ReposGetCommitPathParams = field()
    query_params: ReposGetCommitQueryParams = field()
    

@dataclass
class ReposGetCommitResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    commit: Optional[shared.Commit] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
