from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GitGetTagPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    tag_sha: str = field(metadata={'path_param': { 'field_name': 'tag_sha', 'style': 'simple', 'explode': False }})
    

@dataclass
class GitGetTagRequest:
    path_params: GitGetTagPathParams = field()
    

@dataclass
class GitGetTagResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    git_tag: Optional[shared.GitTag] = field(default=None)
    
