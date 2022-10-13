from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetLatestReleasePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetLatestReleaseRequest:
    path_params: ReposGetLatestReleasePathParams = field(default=None)
    

@dataclass
class ReposGetLatestReleaseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    release: Optional[shared.Release] = field(default=None)
    
