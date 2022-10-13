from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AppPackagesPostRequest:
    request: shared.CreateAppPkg = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppPackagesPostResponse:
    app_pkg_infos: Optional[List[shared.AppPkgInfo]] = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    status_code: int = field(default=None)
    
