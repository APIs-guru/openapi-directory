from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppDIDPutPathParams:
    app_d_id: str = field(metadata={'path_param': { 'field_name': 'appDId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppDIDPutRequest:
    path_params: AppDIDPutPathParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/zip' }})
    

@dataclass
class AppDIDPutResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    
