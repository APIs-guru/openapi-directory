from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class MigrationsGetStatusForOrgPathParams:
    migration_id: int = field(metadata={'path_param': { 'field_name': 'migration_id', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class MigrationsGetStatusForOrgExcludeEnum(str, Enum):
    REPOSITORIES = "repositories"


@dataclass
class MigrationsGetStatusForOrgQueryParams:
    exclude: Optional[List[MigrationsGetStatusForOrgExcludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': True }})
    

@dataclass
class MigrationsGetStatusForOrgRequest:
    path_params: MigrationsGetStatusForOrgPathParams = field()
    query_params: MigrationsGetStatusForOrgQueryParams = field()
    

@dataclass
class MigrationsGetStatusForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    migration: Optional[shared.Migration] = field(default=None)
    
