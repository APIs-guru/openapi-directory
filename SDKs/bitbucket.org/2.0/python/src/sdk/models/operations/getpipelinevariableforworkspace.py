from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPipelineVariableForWorkspacePathParams:
    variable_uuid: str = field(metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelineVariableForWorkspaceRequest:
    path_params: GetPipelineVariableForWorkspacePathParams = field()
    

@dataclass
class GetPipelineVariableForWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_variable: Optional[dict[str, Any]] = field(default=None)
    
