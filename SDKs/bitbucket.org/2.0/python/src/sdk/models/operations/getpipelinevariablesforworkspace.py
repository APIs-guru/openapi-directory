from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPipelineVariablesForWorkspacePathParams:
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelineVariablesForWorkspaceRequest:
    path_params: GetPipelineVariablesForWorkspacePathParams = field()
    

@dataclass
class GetPipelineVariablesForWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    paginated_pipeline_variables: Optional[shared.PaginatedPipelineVariables] = field(default=None)
    
