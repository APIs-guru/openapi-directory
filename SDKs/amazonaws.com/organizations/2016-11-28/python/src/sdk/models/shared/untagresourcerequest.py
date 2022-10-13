from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UntagResourceRequest:
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    tag_keys: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagKeys' }})
    
