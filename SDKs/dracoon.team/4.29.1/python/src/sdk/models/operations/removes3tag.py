from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveS3TagPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveS3TagHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveS3TagRequest:
    headers: RemoveS3TagHeaders = field()
    path_params: RemoveS3TagPathParams = field()
    

@dataclass
class RemoveS3TagResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
