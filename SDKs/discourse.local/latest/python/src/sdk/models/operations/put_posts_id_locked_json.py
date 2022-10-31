from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PutPostsIDLockedJSONPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPostsIDLockedJSONHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(default=None, metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutPostsIDLockedJSONRequestBody:
    locked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    

@dataclass
class PutPostsIDLockedJSONRequest:
    path_params: PutPostsIDLockedJSONPathParams = field(default=None)
    headers: PutPostsIDLockedJSONHeaders = field(default=None)
    request: Optional[PutPostsIDLockedJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutPostsIDLockedJSON200ApplicationJSON:
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    

@dataclass
class PutPostsIDLockedJSONResponse:
    content_type: str = field(default=None)
    put_posts_id_locked_json_200_application_json_object: Optional[PutPostsIDLockedJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
