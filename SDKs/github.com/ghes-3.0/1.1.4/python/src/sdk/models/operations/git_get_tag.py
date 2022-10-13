from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GitGetTagPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    tag_sha: str = field(default=None, metadata={'path_param': { 'field_name': 'tag_sha', 'style': 'simple', 'explode': False }})
    

@dataclass
class GitGetTagRequest:
    path_params: GitGetTagPathParams = field(default=None)
    

@dataclass
class GitGetTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    git_tag: Optional[shared.GitTag] = field(default=None)
    
