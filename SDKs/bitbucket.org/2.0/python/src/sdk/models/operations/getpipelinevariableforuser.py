from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPipelineVariableForUserPathParams:
    selected_user: str = field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    variable_uuid: str = field(metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelineVariableForUserRequest:
    path_params: GetPipelineVariableForUserPathParams = field()
    

@dataclass
class GetPipelineVariableForUserResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_variable: Optional[dict[str, Any]] = field(default=None)
    
