from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PackagesGetPackageVersionForUserPathParams:
    package_name: str = field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared.PackageTypeEnum = field(metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    package_version_id: int = field(metadata={'path_param': { 'field_name': 'package_version_id', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesGetPackageVersionForUserRequest:
    path_params: PackagesGetPackageVersionForUserPathParams = field()
    

@dataclass
class PackagesGetPackageVersionForUserResponse:
    content_type: str = field()
    status_code: int = field()
    package_version: Optional[shared.PackageVersion] = field(default=None)
    
