from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveNodePathParams:
    node_id: int = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveNodeHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveNodeRequest:
    headers: RemoveNodeHeaders = field()
    path_params: RemoveNodePathParams = field()
    

@dataclass
class RemoveNodeResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
