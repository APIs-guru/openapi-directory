from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppDIDGetPathParams:
    app_d_id: str = field(metadata={'path_param': { 'field_name': 'appDId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppDIDGetRequest:
    path_params: AppDIDGetPathParams = field()
    

@dataclass
class AppDIDGetResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    
