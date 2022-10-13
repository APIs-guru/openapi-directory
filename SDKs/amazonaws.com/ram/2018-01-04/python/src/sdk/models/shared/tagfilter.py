from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TagFilter:
    tag_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagKey' }})
    tag_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagValues' }})
    
