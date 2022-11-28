from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetTagsJSON200ApplicationJSONExtras:
    categories: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    

@dataclass_json
@dataclass
class GetTagsJSON200ApplicationJSONTags:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pm_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pm_count') }})
    target_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_tag') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclass
class GetTagsJSON200ApplicationJSON:
    extras: Optional[GetTagsJSON200ApplicationJSONExtras] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extras') }})
    tags: Optional[List[GetTagsJSON200ApplicationJSONTags]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class GetTagsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_tags_json_200_application_json_object: Optional[GetTagsJSON200ApplicationJSON] = field(default=None)
    
