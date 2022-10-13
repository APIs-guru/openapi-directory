from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CopyWorkspaceImageRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    source_image_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceImageId' }})
    source_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceRegion' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
