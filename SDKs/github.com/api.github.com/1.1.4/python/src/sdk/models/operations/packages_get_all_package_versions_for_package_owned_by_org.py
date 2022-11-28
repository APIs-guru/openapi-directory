from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    package_name: str = field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared.PackageTypeEnum = field(metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    
class PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnum(str, Enum):
    ACTIVE = "active"
    DELETED = "deleted"


@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    state: Optional[PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByOrgRequest:
    path_params: PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams = field()
    query_params: PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams = field()
    

@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    package_versions: Optional[List[shared.PackageVersion]] = field(default=None)
    
