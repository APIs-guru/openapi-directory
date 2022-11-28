from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RemoveGroupMembersPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveGroupMembersHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveGroupMembersRequest:
    headers: RemoveGroupMembersHeaders = field()
    path_params: RemoveGroupMembersPathParams = field()
    request: shared.ChangeGroupMembersRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveGroupMembersResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    
