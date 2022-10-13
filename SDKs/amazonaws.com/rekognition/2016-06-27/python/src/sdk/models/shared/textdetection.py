from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import geometry
from . import texttypes_enum


@dataclass_json
@dataclass
class TextDetection:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    detected_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetectedText' }})
    geometry: Optional[geometry.Geometry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Geometry' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentId' }})
    type: Optional[texttypes_enum.TextTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
