from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestPublicDownloadShareInfoPathParams:
    access_key: str = field(metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestPublicDownloadShareInfoHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestPublicDownloadShareInfoRequest:
    headers: RequestPublicDownloadShareInfoHeaders = field()
    path_params: RequestPublicDownloadShareInfoPathParams = field()
    

@dataclass
class RequestPublicDownloadShareInfoResponseOutput:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    public_download_share: Optional[shared.PublicDownloadShareOutput] = field(default=None)
    
