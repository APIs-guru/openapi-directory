from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetReleasePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    release_id: int = field(metadata={'path_param': { 'field_name': 'release_id', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetReleaseRequest:
    path_params: ReposGetReleasePathParams = field()
    

@dataclass
class ReposGetReleaseResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    release: Optional[shared.Release] = field(default=None)
    
