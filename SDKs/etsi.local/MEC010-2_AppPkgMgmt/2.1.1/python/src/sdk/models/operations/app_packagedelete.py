from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppPackageDeletePathParams:
    app_pkg_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appPkgId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppPackageDeleteRequest:
    path_params: AppPackageDeletePathParams = field(default=None)
    

@dataclass
class AppPackageDeleteResponse:
    content_type: str = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    status_code: int = field(default=None)
    
