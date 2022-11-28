from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeletePipelineVariableForWorkspacePathParams:
    variable_uuid: str = field(metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePipelineVariableForWorkspaceRequest:
    path_params: DeletePipelineVariableForWorkspacePathParams = field()
    

@dataclass
class DeletePipelineVariableForWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    
