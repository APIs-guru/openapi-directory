from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class MigrationsListForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class MigrationsListForOrgExcludeEnum(str, Enum):
    REPOSITORIES = "repositories"


@dataclass
class MigrationsListForOrgQueryParams:
    exclude: Optional[List[MigrationsListForOrgExcludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class MigrationsListForOrgRequest:
    path_params: MigrationsListForOrgPathParams = field(default=None)
    query_params: MigrationsListForOrgQueryParams = field(default=None)
    

@dataclass
class MigrationsListForOrgResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    migrations: Optional[List[shared.Migration]] = field(default=None)
    
