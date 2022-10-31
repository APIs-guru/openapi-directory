from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UnsubscribeNodePathParams:
    node_id: int = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnsubscribeNodeHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnsubscribeNodeRequest:
    path_params: UnsubscribeNodePathParams = field(default=None)
    headers: UnsubscribeNodeHeaders = field(default=None)
    

@dataclass
class UnsubscribeNodeResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
