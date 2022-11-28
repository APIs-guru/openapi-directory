from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutPostsIDLockedJSONPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPostsIDLockedJSONHeaders:
    api_key: str = field(metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutPostsIDLockedJSONRequestBody:
    locked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    

@dataclass_json
@dataclass
class PutPostsIDLockedJSON200ApplicationJSON:
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    

@dataclass
class PutPostsIDLockedJSONRequest:
    headers: PutPostsIDLockedJSONHeaders = field()
    path_params: PutPostsIDLockedJSONPathParams = field()
    request: Optional[PutPostsIDLockedJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutPostsIDLockedJSONResponse:
    content_type: str = field()
    status_code: int = field()
    put_posts_id_locked_json_200_application_json_object: Optional[PutPostsIDLockedJSON200ApplicationJSON] = field(default=None)
    
