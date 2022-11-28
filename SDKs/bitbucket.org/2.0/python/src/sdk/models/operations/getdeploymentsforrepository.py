from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDeploymentsForRepositoryPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeploymentsForRepositoryRequest:
    path_params: GetDeploymentsForRepositoryPathParams = field()
    

@dataclass
class GetDeploymentsForRepositoryResponse:
    content_type: str = field()
    status_code: int = field()
    paginated_deployments: Optional[shared.PaginatedDeployments] = field(default=None)
    
