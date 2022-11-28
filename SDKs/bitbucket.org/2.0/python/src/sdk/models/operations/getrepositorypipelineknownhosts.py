from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRepositoryPipelineKnownHostsPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoryPipelineKnownHostsRequest:
    path_params: GetRepositoryPipelineKnownHostsPathParams = field()
    

@dataclass
class GetRepositoryPipelineKnownHostsResponse:
    content_type: str = field()
    status_code: int = field()
    paginated_pipeline_known_hosts: Optional[shared.PaginatedPipelineKnownHosts] = field(default=None)
    
