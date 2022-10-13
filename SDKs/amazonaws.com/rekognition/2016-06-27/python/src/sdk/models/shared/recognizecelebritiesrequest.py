from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import image


@dataclass_json
@dataclass
class RecognizeCelebritiesRequest:
    image: image.Image = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Image' }})
    
