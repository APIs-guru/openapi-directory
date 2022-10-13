from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams:
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared.PackageTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    
class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserStateEnum(str, Enum):
    ACTIVE = "active"
    DELETED = "deleted"


@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    state: Optional[PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequest:
    path_params: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserPathParams = field(default=None)
    query_params: PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams = field(default=None)
    

@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    package_versions: Optional[List[shared.PackageVersion]] = field(default=None)
    
