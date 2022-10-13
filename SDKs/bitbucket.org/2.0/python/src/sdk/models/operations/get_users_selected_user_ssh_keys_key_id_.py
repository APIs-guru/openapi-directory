from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUsersSelectedUserSSHKeysKeyIDPathParams:
    key_id: str = field(default=None, metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersSelectedUserSSHKeysKeyIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersSelectedUserSSHKeysKeyIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetUsersSelectedUserSSHKeysKeyIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUsersSelectedUserSSHKeysKeyIDSecurity:
    option1: Optional[GetUsersSelectedUserSSHKeysKeyIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUsersSelectedUserSSHKeysKeyIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetUsersSelectedUserSSHKeysKeyIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUsersSelectedUserSSHKeysKeyIDRequest:
    path_params: GetUsersSelectedUserSSHKeysKeyIDPathParams = field(default=None)
    security: GetUsersSelectedUserSSHKeysKeyIDSecurity = field(default=None)
    

@dataclass
class GetUsersSelectedUserSSHKeysKeyIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    ssh_account_key: Optional[dict[str, Any]] = field(default=None)
    
