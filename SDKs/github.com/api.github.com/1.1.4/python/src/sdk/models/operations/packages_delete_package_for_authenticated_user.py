from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PackagesDeletePackageForAuthenticatedUserPathParams:
    package_name: str = field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared.PackageTypeEnum = field(metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesDeletePackageForAuthenticatedUserRequest:
    path_params: PackagesDeletePackageForAuthenticatedUserPathParams = field()
    

@dataclass
class PackagesDeletePackageForAuthenticatedUserResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
