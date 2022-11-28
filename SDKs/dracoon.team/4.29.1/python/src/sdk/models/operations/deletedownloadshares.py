from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteDownloadSharesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDownloadSharesRequest:
    headers: DeleteDownloadSharesHeaders = field()
    request: shared.DeleteDownloadSharesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteDownloadSharesResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
