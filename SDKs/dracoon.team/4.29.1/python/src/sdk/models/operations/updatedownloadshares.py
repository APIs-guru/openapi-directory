from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateDownloadSharesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDownloadSharesRequest:
    headers: UpdateDownloadSharesHeaders = field(default=None)
    request: shared.UpdateDownloadSharesBulkRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDownloadSharesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
