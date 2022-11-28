from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PullsListFilesPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class PullsListFilesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class PullsListFilesRequest:
    path_params: PullsListFilesPathParams = field()
    query_params: PullsListFilesQueryParams = field()
    

@dataclass
class PullsListFilesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    diff_entries: Optional[List[shared.DiffEntry]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
