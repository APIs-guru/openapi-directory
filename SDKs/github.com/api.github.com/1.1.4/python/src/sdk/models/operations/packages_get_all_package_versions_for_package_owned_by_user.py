from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams:
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared.PackageTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByUserRequest:
    path_params: PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams = field(default=None)
    

@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    package_versions: Optional[List[shared.PackageVersion]] = field(default=None)
    
