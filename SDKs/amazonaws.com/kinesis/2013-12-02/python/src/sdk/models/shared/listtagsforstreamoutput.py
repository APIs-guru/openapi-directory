from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class ListTagsForStreamOutput:
    has_more_tags: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasMoreTags' }})
    tags: List[tag.Tag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
