from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PutTIDJSONPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTIDJSONHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(default=None, metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutTIDJSONRequestBodyTopic:
    category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class PutTIDJSONRequestBody:
    topic: Optional[PutTIDJSONRequestBodyTopic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    

@dataclass
class PutTIDJSONRequest:
    path_params: PutTIDJSONPathParams = field(default=None)
    headers: PutTIDJSONHeaders = field(default=None)
    request: Optional[PutTIDJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutTIDJSON200ApplicationJSONBasicTopic:
    fancy_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fancy_title' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    posts_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posts_count' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class PutTIDJSON200ApplicationJSON:
    basic_topic: Optional[PutTIDJSON200ApplicationJSONBasicTopic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basic_topic' }})
    

@dataclass
class PutTIDJSONResponse:
    content_type: str = field(default=None)
    put_t_id_json_200_application_json_object: Optional[PutTIDJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
