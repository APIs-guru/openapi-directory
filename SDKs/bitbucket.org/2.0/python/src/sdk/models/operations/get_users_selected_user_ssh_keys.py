from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetUsersSelectedUserSSHKeysPathParams:
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersSelectedUserSSHKeysSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersSelectedUserSSHKeysSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetUsersSelectedUserSSHKeysSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUsersSelectedUserSSHKeysSecurity:
    option1: Optional[GetUsersSelectedUserSSHKeysSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUsersSelectedUserSSHKeysSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetUsersSelectedUserSSHKeysSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUsersSelectedUserSSHKeysRequest:
    path_params: GetUsersSelectedUserSSHKeysPathParams = field(default=None)
    security: GetUsersSelectedUserSSHKeysSecurity = field(default=None)
    

@dataclass
class GetUsersSelectedUserSSHKeysResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_ssh_user_keys: Optional[shared.PaginatedSSHUserKeys] = field(default=None)
    
