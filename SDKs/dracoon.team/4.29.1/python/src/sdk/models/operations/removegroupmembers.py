from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RemoveGroupMembersPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveGroupMembersHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    

@dataclass
class RemoveGroupMembersRequest:
    path_params: RemoveGroupMembersPathParams = field(default=None)
    headers: RemoveGroupMembersHeaders = field(default=None)
    request: shared.ChangeGroupMembersRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveGroupMembersResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    status_code: int = field(default=None)
    
