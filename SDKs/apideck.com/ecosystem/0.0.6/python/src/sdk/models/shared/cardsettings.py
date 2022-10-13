from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CardSettings:
    background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'background_color' }})
    border_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'border_color' }})
    border_radius: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'border_radius' }})
    border_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'border_size' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    description_lines: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_lines' }})
    icon_border_radius: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon_border_radius' }})
    icon_shadow_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon_shadow_enabled' }})
    icon_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon_size' }})
    shadow_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shadow_enabled' }})
    show_action: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_action' }})
    show_badges: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_badges' }})
    show_category: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_category' }})
    show_description: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_description' }})
    style: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'style' }})
    
