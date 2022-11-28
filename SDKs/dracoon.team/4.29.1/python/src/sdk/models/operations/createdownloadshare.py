from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateDownloadShareHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDownloadShareRequest:
    headers: CreateDownloadShareHeaders = field()
    request: shared.CreateDownloadShareRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDownloadShareResponse:
    content_type: str = field()
    status_code: int = field()
    download_share: Optional[shared.DownloadShare] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    create_download_share_400_application_json_one_of: Optional[Any] = field(default=None)
    
