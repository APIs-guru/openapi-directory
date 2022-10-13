from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestDeletedNodePathParams:
    deleted_node_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deleted_node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestDeletedNodeHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    

@dataclass
class RequestDeletedNodeRequest:
    path_params: RequestDeletedNodePathParams = field(default=None)
    headers: RequestDeletedNodeHeaders = field(default=None)
    

@dataclass
class RequestDeletedNodeResponse:
    content_type: str = field(default=None)
    deleted_node: Optional[shared.DeletedNode] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
