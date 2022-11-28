from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRepositoryPipelineKnownHostPathParams:
    known_host_uuid: str = field(metadata={'path_param': { 'field_name': 'known_host_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoryPipelineKnownHostRequest:
    path_params: GetRepositoryPipelineKnownHostPathParams = field()
    

@dataclass
class GetRepositoryPipelineKnownHostResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_known_host: Optional[dict[str, Any]] = field(default=None)
    
