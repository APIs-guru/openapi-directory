from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateDownloadSharesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDownloadSharesRequest:
    headers: UpdateDownloadSharesHeaders = field()
    request: shared.UpdateDownloadSharesBulkRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDownloadSharesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
