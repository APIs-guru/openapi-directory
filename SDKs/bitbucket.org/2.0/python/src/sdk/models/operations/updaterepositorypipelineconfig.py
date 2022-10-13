from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UpdateRepositoryPipelineConfigPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRepositoryPipelineConfigRequest:
    path_params: UpdateRepositoryPipelineConfigPathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRepositoryPipelineConfigResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    pipelines_config: Optional[dict[str, Any]] = field(default=None)
    
