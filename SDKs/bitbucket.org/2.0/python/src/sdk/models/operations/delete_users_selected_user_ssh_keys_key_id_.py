from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteUsersSelectedUserSSHKeysKeyIDPathParams:
    key_id: str = field(default=None, metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUsersSelectedUserSSHKeysKeyIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteUsersSelectedUserSSHKeysKeyIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteUsersSelectedUserSSHKeysKeyIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteUsersSelectedUserSSHKeysKeyIDSecurity:
    option1: Optional[DeleteUsersSelectedUserSSHKeysKeyIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteUsersSelectedUserSSHKeysKeyIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteUsersSelectedUserSSHKeysKeyIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteUsersSelectedUserSSHKeysKeyIDRequest:
    path_params: DeleteUsersSelectedUserSSHKeysKeyIDPathParams = field(default=None)
    security: DeleteUsersSelectedUserSSHKeysKeyIDSecurity = field(default=None)
    

@dataclass
class DeleteUsersSelectedUserSSHKeysKeyIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
