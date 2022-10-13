from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteUsersSelectedUserHooksUIDPathParams:
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    uid: str = field(default=None, metadata={'path_param': { 'field_name': 'uid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUsersSelectedUserHooksUIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteUsersSelectedUserHooksUIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUsersSelectedUserHooksUIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteUsersSelectedUserHooksUIDSecurity:
    option1: Optional[DeleteUsersSelectedUserHooksUIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteUsersSelectedUserHooksUIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteUsersSelectedUserHooksUIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteUsersSelectedUserHooksUIDRequest:
    path_params: DeleteUsersSelectedUserHooksUIDPathParams = field(default=None)
    security: DeleteUsersSelectedUserHooksUIDSecurity = field(default=None)
    

@dataclass
class DeleteUsersSelectedUserHooksUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
