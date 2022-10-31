from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubscribeNodePathParams:
    node_id: int = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeNodeHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeNodeRequest:
    path_params: SubscribeNodePathParams = field(default=None)
    headers: SubscribeNodeHeaders = field(default=None)
    

@dataclass
class SubscribeNodeResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    subscribed_node: Optional[shared.SubscribedNode] = field(default=None)
    
