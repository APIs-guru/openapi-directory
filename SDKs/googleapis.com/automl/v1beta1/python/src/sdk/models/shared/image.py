from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inputconfig


@dataclass_json
@dataclass
class Image:
    image_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageBytes' }})
    input_config: Optional[inputconfig.InputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    thumbnail_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailUri' }})
    
