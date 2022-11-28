from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppPkgGetPathParams:
    app_pkg_id: str = field(metadata={'path_param': { 'field_name': 'appPkgId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppPkgGetRequest:
    path_params: AppPkgGetPathParams = field()
    

@dataclass
class AppPkgGetResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    
