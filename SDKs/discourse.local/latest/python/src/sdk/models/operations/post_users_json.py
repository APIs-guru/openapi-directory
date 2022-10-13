from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostUsersJSONHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'Api-Key' }})
    api_username: str = field(default=None, metadata={'header': { 'field_name': 'Api-Username' }})
    

@dataclass_json
@dataclass
class PostUsersJSONRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    approved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approved' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    user_fields_1_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_fields[1]' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass
class PostUsersJSONRequest:
    headers: PostUsersJSONHeaders = field(default=None)
    request: Optional[PostUsersJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostUsersJSON200ApplicationJSON:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    

@dataclass
class PostUsersJSONResponse:
    content_type: str = field(default=None)
    post_users_json_200_application_json_object: Optional[PostUsersJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
