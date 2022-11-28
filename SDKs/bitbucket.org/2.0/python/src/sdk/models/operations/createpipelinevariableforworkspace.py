from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CreatePipelineVariableForWorkspacePathParams:
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePipelineVariableForWorkspaceRequest:
    path_params: CreatePipelineVariableForWorkspacePathParams = field()
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePipelineVariableForWorkspaceResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_variable: Optional[dict[str, Any]] = field(default=None)
    
