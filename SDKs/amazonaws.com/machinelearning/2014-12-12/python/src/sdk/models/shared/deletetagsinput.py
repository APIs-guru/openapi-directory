from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import taggableresourcetype_enum


@dataclass_json
@dataclass
class DeleteTagsInput:
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    resource_type: taggableresourcetype_enum.TaggableResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    tag_keys: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagKeys' }})
    
