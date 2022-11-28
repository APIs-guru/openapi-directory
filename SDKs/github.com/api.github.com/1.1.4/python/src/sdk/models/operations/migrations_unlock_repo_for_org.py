from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MigrationsUnlockRepoForOrgPathParams:
    migration_id: int = field(metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repo_name: str = field(metadata={'path_param': { 'field_name': 'repo_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrationsUnlockRepoForOrgRequest:
    path_params: MigrationsUnlockRepoForOrgPathParams = field()
    

@dataclass
class MigrationsUnlockRepoForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
