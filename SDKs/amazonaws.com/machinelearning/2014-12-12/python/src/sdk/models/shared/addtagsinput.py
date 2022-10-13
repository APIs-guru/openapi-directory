from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import taggableresourcetype_enum
from . import tag


@dataclass_json
@dataclass
class AddTagsInput:
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    resource_type: taggableresourcetype_enum.TaggableResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    tags: List[tag.Tag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
