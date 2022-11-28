from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class SubscribeUploadSharesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeUploadSharesRequest:
    headers: SubscribeUploadSharesHeaders = field()
    request: shared.UpdateSubscriptionsBulkRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubscribeUploadSharesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
