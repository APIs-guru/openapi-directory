from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestPublicUploadShareInfoPathParams:
    access_key: str = field(metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestPublicUploadShareInfoHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    x_sds_share_password: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Share-Password', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestPublicUploadShareInfoRequest:
    headers: RequestPublicUploadShareInfoHeaders = field()
    path_params: RequestPublicUploadShareInfoPathParams = field()
    

@dataclass
class RequestPublicUploadShareInfoResponseOutput:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    public_upload_share: Optional[shared.PublicUploadShareOutput] = field(default=None)
    
