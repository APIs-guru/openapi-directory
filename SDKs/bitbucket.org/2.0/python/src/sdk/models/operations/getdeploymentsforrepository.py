from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDeploymentsForRepositoryPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeploymentsForRepositoryRequest:
    path_params: GetDeploymentsForRepositoryPathParams = field(default=None)
    

@dataclass
class GetDeploymentsForRepositoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    paginated_deployments: Optional[shared.PaginatedDeployments] = field(default=None)
    
