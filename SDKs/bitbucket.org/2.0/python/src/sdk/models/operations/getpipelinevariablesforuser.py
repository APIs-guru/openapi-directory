from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPipelineVariablesForUserPathParams:
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelineVariablesForUserRequest:
    path_params: GetPipelineVariablesForUserPathParams = field(default=None)
    

@dataclass
class GetPipelineVariablesForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    paginated_pipeline_variables: Optional[shared.PaginatedPipelineVariables] = field(default=None)
    
