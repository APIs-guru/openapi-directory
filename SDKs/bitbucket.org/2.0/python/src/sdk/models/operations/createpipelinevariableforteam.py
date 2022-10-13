from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CreatePipelineVariableForTeamPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePipelineVariableForTeamQueryParams:
    workspace: str = field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass
class CreatePipelineVariableForTeamRequest:
    path_params: CreatePipelineVariableForTeamPathParams = field(default=None)
    query_params: CreatePipelineVariableForTeamQueryParams = field(default=None)
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePipelineVariableForTeamResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_variable: Optional[dict[str, Any]] = field(default=None)
    
