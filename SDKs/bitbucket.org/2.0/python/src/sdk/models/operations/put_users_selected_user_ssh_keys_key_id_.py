from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutUsersSelectedUserSSHKeysKeyIDPathParams:
    key_id: str = field(default=None, metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUsersSelectedUserSSHKeysKeyIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutUsersSelectedUserSSHKeysKeyIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutUsersSelectedUserSSHKeysKeyIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutUsersSelectedUserSSHKeysKeyIDSecurity:
    option1: Optional[PutUsersSelectedUserSSHKeysKeyIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutUsersSelectedUserSSHKeysKeyIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PutUsersSelectedUserSSHKeysKeyIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutUsersSelectedUserSSHKeysKeyIDRequest:
    path_params: PutUsersSelectedUserSSHKeysKeyIDPathParams = field(default=None)
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutUsersSelectedUserSSHKeysKeyIDSecurity = field(default=None)
    

@dataclass
class PutUsersSelectedUserSSHKeysKeyIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    ssh_account_key: Optional[dict[str, Any]] = field(default=None)
    
