from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class MigrationsGetStatusForAuthenticatedUserPathParams:
    migration_id: int = field(default=None, metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MigrationsGetStatusForAuthenticatedUserQueryParams:
    exclude: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': True }})
    

@dataclass
class MigrationsGetStatusForAuthenticatedUserRequest:
    path_params: MigrationsGetStatusForAuthenticatedUserPathParams = field(default=None)
    query_params: MigrationsGetStatusForAuthenticatedUserQueryParams = field(default=None)
    

@dataclass
class MigrationsGetStatusForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    migration: Optional[shared.Migration] = field(default=None)
    
