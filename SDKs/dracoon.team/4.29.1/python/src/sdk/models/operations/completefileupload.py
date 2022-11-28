from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CompleteFileUploadPathParams:
    upload_id: str = field(metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteFileUploadHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteFileUploadRequest:
    headers: CompleteFileUploadHeaders = field()
    path_params: CompleteFileUploadPathParams = field()
    request: shared.CompleteUploadRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CompleteFileUploadResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    node: Optional[shared.Node] = field(default=None)
    
