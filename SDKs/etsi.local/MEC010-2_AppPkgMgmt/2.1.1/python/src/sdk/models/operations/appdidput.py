from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppDIDPutPathParams:
    app_d_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appDId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppDIDPutRequest:
    path_params: AppDIDPutPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/zip' }})
    

@dataclass
class AppDIDPutResponse:
    content_type: str = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    status_code: int = field(default=None)
    
