from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GitGetRefPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = field(default=None, metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class GitGetRefRequest:
    path_params: GitGetRefPathParams = field(default=None)
    

@dataclass
class GitGetRefResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    git_ref: Optional[shared.GitRef] = field(default=None)
    
