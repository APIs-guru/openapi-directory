from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class PackagesGetPackageForOrganizationPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared.PackageTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesGetPackageForOrganizationRequest:
    path_params: PackagesGetPackageForOrganizationPathParams = field(default=None)
    

@dataclass
class PackagesGetPackageForOrganizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    package: Optional[shared.Package] = field(default=None)
    
