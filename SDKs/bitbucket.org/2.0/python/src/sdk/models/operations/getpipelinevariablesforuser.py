from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPipelineVariablesForUserPathParams:
    selected_user: str = field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelineVariablesForUserRequest:
    path_params: GetPipelineVariablesForUserPathParams = field()
    

@dataclass
class GetPipelineVariablesForUserResponse:
    content_type: str = field()
    status_code: int = field()
    paginated_pipeline_variables: Optional[shared.PaginatedPipelineVariables] = field(default=None)
    
