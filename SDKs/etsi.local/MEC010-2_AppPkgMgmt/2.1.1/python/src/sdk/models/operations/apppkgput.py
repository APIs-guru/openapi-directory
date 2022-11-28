from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppPkgPutPathParams:
    app_pkg_id: str = field(metadata={'path_param': { 'field_name': 'appPkgId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppPkgPutRequest:
    path_params: AppPkgPutPathParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/zip' }})
    

@dataclass
class AppPkgPutResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    
