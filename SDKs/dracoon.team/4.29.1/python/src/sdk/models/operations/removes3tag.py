from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveS3TagPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveS3TagHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveS3TagRequest:
    path_params: RemoveS3TagPathParams = field(default=None)
    headers: RemoveS3TagHeaders = field(default=None)
    

@dataclass
class RemoveS3TagResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
