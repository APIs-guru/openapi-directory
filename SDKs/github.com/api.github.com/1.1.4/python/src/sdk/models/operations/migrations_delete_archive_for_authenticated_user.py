from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MigrationsDeleteArchiveForAuthenticatedUserPathParams:
    migration_id: int = field(default=None, metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrationsDeleteArchiveForAuthenticatedUserRequest:
    path_params: MigrationsDeleteArchiveForAuthenticatedUserPathParams = field(default=None)
    

@dataclass
class MigrationsDeleteArchiveForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
