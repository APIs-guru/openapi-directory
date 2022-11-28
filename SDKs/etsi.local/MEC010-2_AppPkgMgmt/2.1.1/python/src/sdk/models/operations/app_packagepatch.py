from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppPackagePatchPathParams:
    app_pkg_id: str = field(metadata={'path_param': { 'field_name': 'appPkgId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppPackagePatchRequest:
    path_params: AppPackagePatchPathParams = field()
    request: shared.AppPkgInfoModifications = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppPackagePatchResponse:
    content_type: str = field()
    status_code: int = field()
    app_pkg_info_modifications: Optional[shared.AppPkgInfoModifications] = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    
