from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostProjectUsernameProjectSSHKeyPathParams:
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class PostProjectUsernameProjectSSHKeyContentTypeEnum(str, Enum):
    APPLICATION_JSON = "application/json"


@dataclass
class PostProjectUsernameProjectSSHKeyHeaders:
    content_type: PostProjectUsernameProjectSSHKeyContentTypeEnum = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostProjectUsernameProjectSSHKeyRequestBody:
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_key') }})
    

@dataclass_json
@dataclass
class PostProjectUsernameProjectSSHKeyDefaultApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostProjectUsernameProjectSSHKeyRequest:
    headers: PostProjectUsernameProjectSSHKeyHeaders = field()
    path_params: PostProjectUsernameProjectSSHKeyPathParams = field()
    request: PostProjectUsernameProjectSSHKeyRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProjectUsernameProjectSSHKeyResponse:
    content_type: str = field()
    status_code: int = field()
    post_project_username_project_ssh_key_default_application_json_object: Optional[PostProjectUsernameProjectSSHKeyDefaultApplicationJSON] = field(default=None)
    
