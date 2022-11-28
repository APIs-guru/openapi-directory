from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveDeletedNodesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveDeletedNodesRequest:
    headers: RemoveDeletedNodesHeaders = field()
    request: shared.DeleteDeletedNodesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveDeletedNodesResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
