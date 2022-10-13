from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import equipmentdetection
from . import bodypart_enum


@dataclass_json
@dataclass
class ProtectiveEquipmentBodyPart:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    equipment_detections: Optional[List[equipmentdetection.EquipmentDetection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EquipmentDetections' }})
    name: Optional[bodypart_enum.BodyPartEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
