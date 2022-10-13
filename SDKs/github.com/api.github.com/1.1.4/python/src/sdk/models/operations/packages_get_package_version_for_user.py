from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class PackagesGetPackageVersionForUserPathParams:
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared.PackageTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    package_version_id: int = field(default=None, metadata={'path_param': { 'field_name': 'package_version_id', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesGetPackageVersionForUserRequest:
    path_params: PackagesGetPackageVersionForUserPathParams = field(default=None)
    

@dataclass
class PackagesGetPackageVersionForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    package_version: Optional[shared.PackageVersion] = field(default=None)
    
