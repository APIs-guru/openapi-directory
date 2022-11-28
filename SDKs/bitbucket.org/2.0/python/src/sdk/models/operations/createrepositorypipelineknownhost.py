from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CreateRepositoryPipelineKnownHostPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateRepositoryPipelineKnownHostRequest:
    path_params: CreateRepositoryPipelineKnownHostPathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRepositoryPipelineKnownHostResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_known_host: Optional[dict[str, Any]] = field(default=None)
    
