from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetLatestPagesBuildPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetLatestPagesBuildRequest:
    path_params: ReposGetLatestPagesBuildPathParams = field()
    

@dataclass
class ReposGetLatestPagesBuildResponse:
    content_type: str = field()
    status_code: int = field()
    page_build: Optional[shared.PageBuild] = field(default=None)
    
