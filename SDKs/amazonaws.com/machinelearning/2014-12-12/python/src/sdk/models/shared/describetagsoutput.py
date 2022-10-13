from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import taggableresourcetype_enum
from . import tag


@dataclass_json
@dataclass
class DescribeTagsOutput:
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    resource_type: Optional[taggableresourcetype_enum.TaggableResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
