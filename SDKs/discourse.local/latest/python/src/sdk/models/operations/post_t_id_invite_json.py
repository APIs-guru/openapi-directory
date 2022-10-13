from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostTIDInviteJSONPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTIDInviteJSONHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'Api-Key' }})
    api_username: str = field(default=None, metadata={'header': { 'field_name': 'Api-Username' }})
    

@dataclass_json
@dataclass
class PostTIDInviteJSONRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass
class PostTIDInviteJSONRequest:
    path_params: PostTIDInviteJSONPathParams = field(default=None)
    headers: PostTIDInviteJSONHeaders = field(default=None)
    request: Optional[PostTIDInviteJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostTIDInviteJSON200ApplicationJSONUser:
    avatar_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_template' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class PostTIDInviteJSON200ApplicationJSON:
    user: Optional[PostTIDInviteJSON200ApplicationJSONUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass
class PostTIDInviteJSONResponse:
    content_type: str = field(default=None)
    post_t_id_invite_json_200_application_json_object: Optional[PostTIDInviteJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
