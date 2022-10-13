from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Image:
    height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrl' }})
    width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
