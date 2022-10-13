from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import landmarktype_enum


@dataclass_json
@dataclass
class Landmark:
    type: Optional[landmarktype_enum.LandmarkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'X' }})
    y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Y' }})
    
