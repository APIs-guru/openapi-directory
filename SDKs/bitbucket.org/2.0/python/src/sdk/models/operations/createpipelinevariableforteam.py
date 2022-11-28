from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CreatePipelineVariableForTeamPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePipelineVariableForTeamQueryParams:
    workspace: str = field(metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass
class CreatePipelineVariableForTeamRequest:
    path_params: CreatePipelineVariableForTeamPathParams = field()
    query_params: CreatePipelineVariableForTeamQueryParams = field()
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePipelineVariableForTeamResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_variable: Optional[dict[str, Any]] = field(default=None)
    
