from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveNodePathParams:
    node_id: int = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveNodeHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveNodeRequest:
    path_params: RemoveNodePathParams = field(default=None)
    headers: RemoveNodeHeaders = field(default=None)
    

@dataclass
class RemoveNodeResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
