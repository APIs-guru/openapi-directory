from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPipelineVariableForWorkspacePathParams:
    variable_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelineVariableForWorkspaceRequest:
    path_params: GetPipelineVariableForWorkspacePathParams = field(default=None)
    

@dataclass
class GetPipelineVariableForWorkspaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_variable: Optional[dict[str, Any]] = field(default=None)
    
