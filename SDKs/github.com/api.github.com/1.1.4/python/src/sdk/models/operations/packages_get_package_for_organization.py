from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PackagesGetPackageForOrganizationPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    package_name: str = field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared.PackageTypeEnum = field(metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesGetPackageForOrganizationRequest:
    path_params: PackagesGetPackageForOrganizationPathParams = field()
    

@dataclass
class PackagesGetPackageForOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    package: Optional[shared.Package] = field(default=None)
    
