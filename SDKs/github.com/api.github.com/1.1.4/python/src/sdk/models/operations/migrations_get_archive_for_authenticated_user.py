from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MigrationsGetArchiveForAuthenticatedUserPathParams:
    migration_id: int = field(metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrationsGetArchiveForAuthenticatedUserRequest:
    path_params: MigrationsGetArchiveForAuthenticatedUserPathParams = field()
    

@dataclass
class MigrationsGetArchiveForAuthenticatedUserResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
