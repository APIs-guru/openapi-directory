from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRepositoryPipelineVariablesPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoryPipelineVariablesRequest:
    path_params: GetRepositoryPipelineVariablesPathParams = field(default=None)
    

@dataclass
class GetRepositoryPipelineVariablesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    paginated_pipeline_variables: Optional[shared.PaginatedPipelineVariables] = field(default=None)
    
