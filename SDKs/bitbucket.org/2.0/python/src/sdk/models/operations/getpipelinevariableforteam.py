from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPipelineVariableForTeamPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    variable_uuid: str = field(metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelineVariableForTeamRequest:
    path_params: GetPipelineVariableForTeamPathParams = field()
    

@dataclass
class GetPipelineVariableForTeamResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_variable: Optional[dict[str, Any]] = field(default=None)
    
