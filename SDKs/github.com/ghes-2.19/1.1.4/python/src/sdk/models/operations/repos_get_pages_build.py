from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetPagesBuildPathParams:
    build_id: int = field(default=None, metadata={'path_param': { 'field_name': 'build_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetPagesBuildRequest:
    path_params: ReposGetPagesBuildPathParams = field(default=None)
    

@dataclass
class ReposGetPagesBuildResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    page_build: Optional[shared.PageBuild] = field(default=None)
    
