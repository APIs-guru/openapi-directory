from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPipelineVariableForUserPathParams:
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    variable_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelineVariableForUserRequest:
    path_params: GetPipelineVariableForUserPathParams = field(default=None)
    

@dataclass
class GetPipelineVariableForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_variable: Optional[dict[str, Any]] = field(default=None)
    
