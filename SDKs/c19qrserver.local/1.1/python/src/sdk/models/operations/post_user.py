from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class PostUserRequestBodySample:
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read_only' }})
    

@dataclass
class PostUserRequest:
    request: PostUserRequestBodySample = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_user_response: Optional[shared.CreateUserResponse] = field(default=None)
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    
