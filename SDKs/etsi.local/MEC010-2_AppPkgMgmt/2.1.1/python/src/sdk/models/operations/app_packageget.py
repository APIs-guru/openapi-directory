from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppPackageGetPathParams:
    app_pkg_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appPkgId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppPackageGetRequest:
    path_params: AppPackageGetPathParams = field(default=None)
    

@dataclass
class AppPackageGetResponse:
    app_pkg_info: Optional[shared.AppPkgInfo] = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    status_code: int = field(default=None)
    
