from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class MigrationsListReposForUserPathParams:
    migration_id: int = field(default=None, metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrationsListReposForUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class MigrationsListReposForUserRequest:
    path_params: MigrationsListReposForUserPathParams = field(default=None)
    query_params: MigrationsListReposForUserQueryParams = field(default=None)
    

@dataclass
class MigrationsListReposForUserResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    minimal_repositories: Optional[List[shared.MinimalRepository]] = field(default=None)
    
