from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MastheadSettings:
    background: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'background' }})
    background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'background_color' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
