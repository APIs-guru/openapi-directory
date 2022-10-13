from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import imagefiletype_enum


@dataclass_json
@dataclass
class ImageFile:
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    type: imagefiletype_enum.ImageFileTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
