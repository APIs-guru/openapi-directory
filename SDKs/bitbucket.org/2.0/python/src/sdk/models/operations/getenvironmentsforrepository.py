from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEnvironmentsForRepositoryPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEnvironmentsForRepositoryRequest:
    path_params: GetEnvironmentsForRepositoryPathParams = field(default=None)
    

@dataclass
class GetEnvironmentsForRepositoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    paginated_environments: Optional[shared.PaginatedEnvironments] = field(default=None)
    
