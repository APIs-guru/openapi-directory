from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateFilesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class UpdateFilesRequest:
    headers: UpdateFilesHeaders = field(default=None)
    request: shared.UpdateFilesBulkRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateFilesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
