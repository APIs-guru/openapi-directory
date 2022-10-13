from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CtaSettings:
    background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'background_color' }})
    button_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'button_background_color' }})
    button_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'button_color' }})
    button_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'button_label' }})
    button_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'button_link' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
