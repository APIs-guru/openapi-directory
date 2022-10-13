from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetLatestPagesBuildPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetLatestPagesBuildRequest:
    path_params: ReposGetLatestPagesBuildPathParams = field(default=None)
    

@dataclass
class ReposGetLatestPagesBuildResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    page_build: Optional[shared.PageBuild] = field(default=None)
    
