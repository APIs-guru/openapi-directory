from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GitGetTreePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    tree_sha: str = field(metadata={'path_param': { 'field_name': 'tree_sha', 'style': 'simple', 'explode': False }})
    

@dataclass
class GitGetTreeQueryParams:
    recursive: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'recursive', 'style': 'form', 'explode': True }})
    

@dataclass
class GitGetTreeRequest:
    path_params: GitGetTreePathParams = field()
    query_params: GitGetTreeQueryParams = field()
    

@dataclass
class GitGetTreeResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    git_tree: Optional[shared.GitTree] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
