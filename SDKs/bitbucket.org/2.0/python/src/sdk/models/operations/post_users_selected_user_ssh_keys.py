from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostUsersSelectedUserSSHKeysPathParams:
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersSelectedUserSSHKeysSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostUsersSelectedUserSSHKeysSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostUsersSelectedUserSSHKeysSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUsersSelectedUserSSHKeysSecurity:
    option1: Optional[PostUsersSelectedUserSSHKeysSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostUsersSelectedUserSSHKeysSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostUsersSelectedUserSSHKeysSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostUsersSelectedUserSSHKeysRequest:
    path_params: PostUsersSelectedUserSSHKeysPathParams = field(default=None)
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostUsersSelectedUserSSHKeysSecurity = field(default=None)
    

@dataclass
class PostUsersSelectedUserSSHKeysResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    ssh_account_key: Optional[dict[str, Any]] = field(default=None)
    
