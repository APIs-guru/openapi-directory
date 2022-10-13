from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPipelineVariablesForTeamPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelineVariablesForTeamQueryParams:
    workspace: str = field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPipelineVariablesForTeamRequest:
    path_params: GetPipelineVariablesForTeamPathParams = field(default=None)
    query_params: GetPipelineVariablesForTeamQueryParams = field(default=None)
    

@dataclass
class GetPipelineVariablesForTeamResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    paginated_pipeline_variables: Optional[shared.PaginatedPipelineVariables] = field(default=None)
    
