from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRepositoryPipelineVariablePathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    variable_uuid: str = field(metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoryPipelineVariableRequest:
    path_params: GetRepositoryPipelineVariablePathParams = field()
    

@dataclass
class GetRepositoryPipelineVariableResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_variable: Optional[dict[str, Any]] = field(default=None)
    
