from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import boundingbox
from . import coversbodypart
from . import protectiveequipmenttype_enum


@dataclass_json
@dataclass
class EquipmentDetection:
    bounding_box: Optional[boundingbox.BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BoundingBox' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    covers_body_part: Optional[coversbodypart.CoversBodyPart] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CoversBodyPart' }})
    type: Optional[protectiveequipmenttype_enum.ProtectiveEquipmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
