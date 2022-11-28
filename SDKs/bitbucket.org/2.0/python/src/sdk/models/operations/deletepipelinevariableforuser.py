from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeletePipelineVariableForUserPathParams:
    selected_user: str = field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    variable_uuid: str = field(metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePipelineVariableForUserRequest:
    path_params: DeletePipelineVariableForUserPathParams = field()
    

@dataclass
class DeletePipelineVariableForUserResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    
