from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteUsersSelectedUserHooksUIDPathParams:
    selected_user: str = field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    uid: str = field(metadata={'path_param': { 'field_name': 'uid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUsersSelectedUserHooksUIDSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteUsersSelectedUserHooksUIDRequest:
    path_params: DeleteUsersSelectedUserHooksUIDPathParams = field()
    security: DeleteUsersSelectedUserHooksUIDSecurity = field()
    

@dataclass
class DeleteUsersSelectedUserHooksUIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    
