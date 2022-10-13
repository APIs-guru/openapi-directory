from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IconList:
    depth: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'depth' }})
    height: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    mimetype: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimetype' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    width: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
