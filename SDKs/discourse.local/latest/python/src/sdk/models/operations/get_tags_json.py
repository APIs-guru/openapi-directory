from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetTagsJSON200ApplicationJSONExtras:
    categories: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    

@dataclass_json
@dataclass
class GetTagsJSON200ApplicationJSONTags:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    pm_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pm_count' }})
    target_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_tag' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

@dataclass_json
@dataclass
class GetTagsJSON200ApplicationJSON:
    extras: Optional[GetTagsJSON200ApplicationJSONExtras] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extras' }})
    tags: Optional[List[GetTagsJSON200ApplicationJSONTags]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class GetTagsJSONResponse:
    content_type: str = field(default=None)
    get_tags_json_200_application_json_object: Optional[GetTagsJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
