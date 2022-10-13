from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AdStyleColors:
    background: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'background' }})
    border: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'border' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class AdStyleFont:
    family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family' }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    

@dataclass_json
@dataclass
class AdStyle:
    colors: Optional[AdStyleColors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colors' }})
    corners: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'corners' }})
    font: Optional[AdStyleFont] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'font' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
