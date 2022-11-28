from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AddGroupMembersPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddGroupMembersHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddGroupMembersRequest:
    headers: AddGroupMembersHeaders = field()
    path_params: AddGroupMembersPathParams = field()
    request: shared.ChangeGroupMembersRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddGroupMembersResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    
