from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestNodeParentsPathParams:
    node_id: int = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestNodeParentsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RequestNodeParentsRequest:
    path_params: RequestNodeParentsPathParams = field(default=None)
    headers: RequestNodeParentsHeaders = field(default=None)
    

@dataclass
class RequestNodeParentsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    node_parent_list: Optional[shared.NodeParentList] = field(default=None)
    status_code: int = field(default=None)
    
