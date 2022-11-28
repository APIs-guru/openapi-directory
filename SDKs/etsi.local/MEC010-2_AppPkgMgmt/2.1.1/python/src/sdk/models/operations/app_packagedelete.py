from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppPackageDeletePathParams:
    app_pkg_id: str = field(metadata={'path_param': { 'field_name': 'appPkgId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppPackageDeleteRequest:
    path_params: AppPackageDeletePathParams = field()
    

@dataclass
class AppPackageDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    
