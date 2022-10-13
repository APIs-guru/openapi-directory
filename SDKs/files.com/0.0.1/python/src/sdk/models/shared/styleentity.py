from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imageentity
from . import imageentity


@dataclass_json
@dataclass
class StyleEntity:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    logo: Optional[imageentity.ImageEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    thumbnail: Optional[imageentity.ImageEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail' }})
    
