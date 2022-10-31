from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostProjectUsernameProjectSSHKeyPathParams:
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class PostProjectUsernameProjectSSHKeyContentTypeEnum(str, Enum):
    APPLICATION_JSON = "application/json"


@dataclass
class PostProjectUsernameProjectSSHKeyHeaders:
    content_type: PostProjectUsernameProjectSSHKeyContentTypeEnum = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostProjectUsernameProjectSSHKeyRequestBody:
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_key' }})
    

@dataclass
class PostProjectUsernameProjectSSHKeyRequest:
    path_params: PostProjectUsernameProjectSSHKeyPathParams = field(default=None)
    headers: PostProjectUsernameProjectSSHKeyHeaders = field(default=None)
    request: PostProjectUsernameProjectSSHKeyRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostProjectUsernameProjectSSHKeyDefaultApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostProjectUsernameProjectSSHKeyResponse:
    content_type: str = field(default=None)
    post_project_username_project_ssh_key_default_application_json_object: Optional[PostProjectUsernameProjectSSHKeyDefaultApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
