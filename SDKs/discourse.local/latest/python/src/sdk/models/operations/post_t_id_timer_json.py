from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostTIDTimerJSONPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTIDTimerJSONHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'Api-Key' }})
    api_username: str = field(default=None, metadata={'header': { 'field_name': 'Api-Username' }})
    

@dataclass_json
@dataclass
class PostTIDTimerJSONRequestBody:
    based_on_last_post: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'based_on_last_post' }})
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    status_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_type' }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    

@dataclass
class PostTIDTimerJSONRequest:
    path_params: PostTIDTimerJSONPathParams = field(default=None)
    headers: PostTIDTimerJSONHeaders = field(default=None)
    request: Optional[PostTIDTimerJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostTIDTimerJSON200ApplicationJSON:
    based_on_last_post: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'based_on_last_post' }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    execute_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'execute_at' }})
    success: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

@dataclass
class PostTIDTimerJSONResponse:
    content_type: str = field(default=None)
    post_t_id_timer_json_200_application_json_object: Optional[PostTIDTimerJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
