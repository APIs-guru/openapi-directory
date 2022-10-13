from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigDhcp:
    add_options: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_options' }})
    classid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classid' }})
    hwaddr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hwaddr' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    
