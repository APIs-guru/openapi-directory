from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class MigrationsGetStatusForOrgPathParams:
    migration_id: int = field(default=None, metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class MigrationsGetStatusForOrgExcludeEnum(str, Enum):
    REPOSITORIES = "repositories"


@dataclass
class MigrationsGetStatusForOrgQueryParams:
    exclude: Optional[List[MigrationsGetStatusForOrgExcludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': True }})
    

@dataclass
class MigrationsGetStatusForOrgRequest:
    path_params: MigrationsGetStatusForOrgPathParams = field(default=None)
    query_params: MigrationsGetStatusForOrgQueryParams = field(default=None)
    

@dataclass
class MigrationsGetStatusForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    migration: Optional[shared.Migration] = field(default=None)
    
