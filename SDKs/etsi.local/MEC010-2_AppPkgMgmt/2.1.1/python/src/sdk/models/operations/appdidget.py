from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppDIDGetPathParams:
    app_d_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appDId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppDIDGetRequest:
    path_params: AppDIDGetPathParams = field(default=None)
    

@dataclass
class AppDIDGetResponse:
    content_type: str = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    status_code: int = field(default=None)
    
