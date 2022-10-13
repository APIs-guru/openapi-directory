from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeletePipelineVariableForUserPathParams:
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    variable_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePipelineVariableForUserRequest:
    path_params: DeletePipelineVariableForUserPathParams = field(default=None)
    

@dataclass
class DeletePipelineVariableForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
