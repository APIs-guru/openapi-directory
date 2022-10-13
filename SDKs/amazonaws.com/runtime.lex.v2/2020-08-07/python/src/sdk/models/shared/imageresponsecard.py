from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import button


@dataclass_json
@dataclass
class ImageResponseCard:
    buttons: Optional[List[button.Button]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buttons' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrl' }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitle' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
