from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CompleteFileUploadByTokenPathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteFileUploadByTokenHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteFileUploadByTokenRequest:
    headers: CompleteFileUploadByTokenHeaders = field()
    path_params: CompleteFileUploadByTokenPathParams = field()
    request: shared.CompleteUploadRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CompleteFileUploadByTokenResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    node: Optional[shared.Node] = field(default=None)
    
