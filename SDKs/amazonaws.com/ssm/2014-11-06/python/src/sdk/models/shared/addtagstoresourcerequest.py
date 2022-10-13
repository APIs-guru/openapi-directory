from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import resourcetypefortagging_enum
from . import tag


@dataclass_json
@dataclass
class AddTagsToResourceRequest:
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    resource_type: resourcetypefortagging_enum.ResourceTypeForTaggingEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    tags: List[tag.Tag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
