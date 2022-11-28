from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PackagesRestorePackageVersionForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    package_name: str = field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    package_type: shared.PackageTypeEnum = field(metadata={'path_param': { 'field_name': 'package_type', 'style': 'simple', 'explode': False }})
    package_version_id: int = field(metadata={'path_param': { 'field_name': 'package_version_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesRestorePackageVersionForOrgRequest:
    path_params: PackagesRestorePackageVersionForOrgPathParams = field()
    

@dataclass
class PackagesRestorePackageVersionForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
