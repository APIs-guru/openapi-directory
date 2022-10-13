from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPipelineVariablesForWorkspacePathParams:
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelineVariablesForWorkspaceRequest:
    path_params: GetPipelineVariablesForWorkspacePathParams = field(default=None)
    

@dataclass
class GetPipelineVariablesForWorkspaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    paginated_pipeline_variables: Optional[shared.PaginatedPipelineVariables] = field(default=None)
    
