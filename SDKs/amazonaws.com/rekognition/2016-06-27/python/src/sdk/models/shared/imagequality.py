from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImageQuality:
    brightness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Brightness' }})
    sharpness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sharpness' }})
    
