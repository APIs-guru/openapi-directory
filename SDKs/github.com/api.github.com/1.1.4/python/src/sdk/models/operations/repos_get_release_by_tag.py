from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetReleaseByTagPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    tag: str = field(metadata={'path_param': { 'field_name': 'tag', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetReleaseByTagRequest:
    path_params: ReposGetReleaseByTagPathParams = field()
    

@dataclass
class ReposGetReleaseByTagResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    release: Optional[shared.Release] = field(default=None)
    
