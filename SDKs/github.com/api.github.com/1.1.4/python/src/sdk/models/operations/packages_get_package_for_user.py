from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class PackagesGetPackageForUserPathParams:
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared.PackageTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesGetPackageForUserRequest:
    path_params: PackagesGetPackageForUserPathParams = field(default=None)
    

@dataclass
class PackagesGetPackageForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    package: Optional[shared.Package] = field(default=None)
    
