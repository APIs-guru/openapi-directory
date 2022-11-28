from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRepositoryPipelineConfigPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoryPipelineConfigRequest:
    path_params: GetRepositoryPipelineConfigPathParams = field()
    

@dataclass
class GetRepositoryPipelineConfigResponse:
    content_type: str = field()
    status_code: int = field()
    pipelines_config: Optional[dict[str, Any]] = field(default=None)
    
