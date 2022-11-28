from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubscribeNodePathParams:
    node_id: int = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeNodeHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeNodeRequest:
    headers: SubscribeNodeHeaders = field()
    path_params: SubscribeNodePathParams = field()
    

@dataclass
class SubscribeNodeResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    subscribed_node: Optional[shared.SubscribedNode] = field(default=None)
    
