from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class PackagesRestorePackageForAuthenticatedUserPathParams:
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared.PackageTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesRestorePackageForAuthenticatedUserQueryParams:
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class PackagesRestorePackageForAuthenticatedUserRequest:
    path_params: PackagesRestorePackageForAuthenticatedUserPathParams = field(default=None)
    query_params: PackagesRestorePackageForAuthenticatedUserQueryParams = field(default=None)
    

@dataclass
class PackagesRestorePackageForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
