from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class EnterpriseAdminUpdateUsernameForUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateUsernameForUserRequestBody:
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    

@dataclass
class EnterpriseAdminUpdateUsernameForUserRequest:
    path_params: EnterpriseAdminUpdateUsernameForUserPathParams = field(default=None)
    request: Optional[EnterpriseAdminUpdateUsernameForUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateUsernameForUser202ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class EnterpriseAdminUpdateUsernameForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    enterprise_admin_update_username_for_user_202_application_json_object: Optional[EnterpriseAdminUpdateUsernameForUser202ApplicationJSON] = field(default=None)
    
