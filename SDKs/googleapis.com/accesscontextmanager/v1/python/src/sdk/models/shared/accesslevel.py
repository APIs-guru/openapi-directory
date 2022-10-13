from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import basiclevel
from . import customlevel


@dataclass_json
@dataclass
class AccessLevel:
    basic: Optional[basiclevel.BasicLevel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basic' }})
    custom: Optional[customlevel.CustomLevel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
