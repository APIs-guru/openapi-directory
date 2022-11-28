from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PackagesGetPackageForUserPathParams:
    package_name: str = field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared.PackageTypeEnum = field(metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesGetPackageForUserRequest:
    path_params: PackagesGetPackageForUserPathParams = field()
    

@dataclass
class PackagesGetPackageForUserResponse:
    content_type: str = field()
    status_code: int = field()
    package: Optional[shared.Package] = field(default=None)
    
