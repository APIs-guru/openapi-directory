from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestDownloadShareQrPathParams:
    share_id: int = field(metadata={'path_param': { 'field_name': 'share_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestDownloadShareQrHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestDownloadShareQrRequest:
    headers: RequestDownloadShareQrHeaders = field()
    path_params: RequestDownloadShareQrPathParams = field()
    

@dataclass
class RequestDownloadShareQrResponse:
    content_type: str = field()
    status_code: int = field()
    download_share: Optional[shared.DownloadShare] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
