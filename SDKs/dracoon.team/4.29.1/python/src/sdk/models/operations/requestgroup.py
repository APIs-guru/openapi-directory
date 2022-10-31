from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestGroupPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestGroupHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestGroupRequest:
    path_params: RequestGroupPathParams = field(default=None)
    headers: RequestGroupHeaders = field(default=None)
    

@dataclass
class RequestGroupResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    status_code: int = field(default=None)
    
