from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import segmenttype_enum


@dataclass_json
@dataclass
class SegmentTypeInfo:
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelVersion' }})
    type: Optional[segmenttype_enum.SegmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
