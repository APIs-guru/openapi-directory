from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutTIDJSONPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTIDJSONHeaders:
    api_key: str = field(metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutTIDJSONRequestBodyTopic:
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_id') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class PutTIDJSONRequestBody:
    topic: Optional[PutTIDJSONRequestBodyTopic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    

@dataclass_json
@dataclass
class PutTIDJSON200ApplicationJSONBasicTopic:
    fancy_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fancy_title') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    posts_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posts_count') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class PutTIDJSON200ApplicationJSON:
    basic_topic: Optional[PutTIDJSON200ApplicationJSONBasicTopic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basic_topic') }})
    

@dataclass
class PutTIDJSONRequest:
    headers: PutTIDJSONHeaders = field()
    path_params: PutTIDJSONPathParams = field()
    request: Optional[PutTIDJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutTIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    put_t_id_json_200_application_json_object: Optional[PutTIDJSON200ApplicationJSON] = field(default=None)
    
