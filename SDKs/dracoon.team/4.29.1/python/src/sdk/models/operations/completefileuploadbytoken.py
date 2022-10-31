from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CompleteFileUploadByTokenPathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteFileUploadByTokenHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteFileUploadByTokenRequest:
    path_params: CompleteFileUploadByTokenPathParams = field(default=None)
    headers: CompleteFileUploadByTokenHeaders = field(default=None)
    request: shared.CompleteUploadRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CompleteFileUploadByTokenResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    node: Optional[shared.Node] = field(default=None)
    status_code: int = field(default=None)
    
