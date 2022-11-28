from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GitGetRefPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class GitGetRefRequest:
    path_params: GitGetRefPathParams = field()
    

@dataclass
class GitGetRefResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    git_ref: Optional[shared.GitRef] = field(default=None)
    
