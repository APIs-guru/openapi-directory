from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PackagesGetPackageForAuthenticatedUserPathParams:
    package_name: str = field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared.PackageTypeEnum = field(metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesGetPackageForAuthenticatedUserRequest:
    path_params: PackagesGetPackageForAuthenticatedUserPathParams = field()
    

@dataclass
class PackagesGetPackageForAuthenticatedUserResponse:
    content_type: str = field()
    status_code: int = field()
    package: Optional[shared.Package] = field(default=None)
    
