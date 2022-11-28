from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams:
    package_name: str = field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared.PackageTypeEnum = field(metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByUserRequest:
    path_params: PackagesGetAllPackageVersionsForPackageOwnedByUserPathParams = field()
    

@dataclass
class PackagesGetAllPackageVersionsForPackageOwnedByUserResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    package_versions: Optional[List[shared.PackageVersion]] = field(default=None)
    
