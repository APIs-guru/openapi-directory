from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EmptyDeletedNodesPathParams:
    node_id: int = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EmptyDeletedNodesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class EmptyDeletedNodesRequest:
    path_params: EmptyDeletedNodesPathParams = field(default=None)
    headers: EmptyDeletedNodesHeaders = field(default=None)
    

@dataclass
class EmptyDeletedNodesResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
