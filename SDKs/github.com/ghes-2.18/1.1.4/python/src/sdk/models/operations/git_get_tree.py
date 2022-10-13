from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GitGetTreePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    tree_sha: str = field(default=None, metadata={'path_param': { 'field_name': 'tree_sha', 'style': 'simple', 'explode': False }})
    

@dataclass
class GitGetTreeQueryParams:
    recursive: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'recursive', 'style': 'form', 'explode': True }})
    

@dataclass
class GitGetTreeRequest:
    path_params: GitGetTreePathParams = field(default=None)
    query_params: GitGetTreeQueryParams = field(default=None)
    

@dataclass
class GitGetTreeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    git_tree: Optional[shared.GitTree] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
