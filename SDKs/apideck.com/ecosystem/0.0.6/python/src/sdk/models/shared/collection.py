from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import file
from . import file
from . import translation


@dataclass_json
@dataclass
class Collection:
    card_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_background_color' }})
    card_background_image: Optional[file.File] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_background_image' }})
    card_columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_columns' }})
    card_style: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_style' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    hidden_from_homepage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden_from_homepage' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    logo: Optional[file.File] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequence' }})
    show_max_items_homepage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_max_items_homepage' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    translations: Optional[List[translation.Translation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translations' }})
    visible: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visible' }})
    
