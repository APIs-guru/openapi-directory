from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEnvironmentsForRepositoryPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEnvironmentsForRepositoryRequest:
    path_params: GetEnvironmentsForRepositoryPathParams = field()
    

@dataclass
class GetEnvironmentsForRepositoryResponse:
    content_type: str = field()
    status_code: int = field()
    paginated_environments: Optional[shared.PaginatedEnvironments] = field(default=None)
    
