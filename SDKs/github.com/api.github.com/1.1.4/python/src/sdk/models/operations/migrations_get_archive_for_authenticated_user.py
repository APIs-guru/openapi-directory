from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MigrationsGetArchiveForAuthenticatedUserPathParams:
    migration_id: int = field(default=None, metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrationsGetArchiveForAuthenticatedUserRequest:
    path_params: MigrationsGetArchiveForAuthenticatedUserPathParams = field(default=None)
    

@dataclass
class MigrationsGetArchiveForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
