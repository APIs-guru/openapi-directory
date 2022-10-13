from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import protectiveequipmentbodypart
from . import boundingbox


@dataclass_json
@dataclass
class ProtectiveEquipmentPerson:
    body_parts: Optional[List[protectiveequipmentbodypart.ProtectiveEquipmentBodyPart]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BodyParts' }})
    bounding_box: Optional[boundingbox.BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BoundingBox' }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    
