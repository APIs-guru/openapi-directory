from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveDeletedNodesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RemoveDeletedNodesRequest:
    headers: RemoveDeletedNodesHeaders = field(default=None)
    request: shared.DeleteDeletedNodesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveDeletedNodesResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
