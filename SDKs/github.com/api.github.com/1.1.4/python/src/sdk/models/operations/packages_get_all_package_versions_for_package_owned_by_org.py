from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared.PackageTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    
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
    path_params: PackagesGetAllPackageVersionsForPackageOwnedByOrgPathParams = field(default=None)
    query_params: PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams = field(default=None)
    

@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    package_versions: Optional[List[shared.PackageVersion]] = field(default=None)
    
