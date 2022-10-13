from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UpdateRepositoryPipelineKnownHostPathParams:
    known_host_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'known_host_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRepositoryPipelineKnownHostRequest:
    path_params: UpdateRepositoryPipelineKnownHostPathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRepositoryPipelineKnownHostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_known_host: Optional[dict[str, Any]] = field(default=None)
    
