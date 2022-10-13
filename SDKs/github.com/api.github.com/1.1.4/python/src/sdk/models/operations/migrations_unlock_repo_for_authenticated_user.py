from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MigrationsUnlockRepoForAuthenticatedUserPathParams:
    migration_id: int = field(default=None, metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    repo_name: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrationsUnlockRepoForAuthenticatedUserRequest:
    path_params: MigrationsUnlockRepoForAuthenticatedUserPathParams = field(default=None)
    

@dataclass
class MigrationsUnlockRepoForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
