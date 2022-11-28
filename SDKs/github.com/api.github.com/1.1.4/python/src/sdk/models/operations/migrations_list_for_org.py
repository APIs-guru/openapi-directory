from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class MigrationsListForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class MigrationsListForOrgExcludeEnum(str, Enum):
    REPOSITORIES = "repositories"


@dataclass
class MigrationsListForOrgQueryParams:
    exclude: Optional[List[MigrationsListForOrgExcludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class MigrationsListForOrgRequest:
    path_params: MigrationsListForOrgPathParams = field()
    query_params: MigrationsListForOrgQueryParams = field()
    

@dataclass
class MigrationsListForOrgResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    migrations: Optional[List[shared.Migration]] = field(default=None)
    
