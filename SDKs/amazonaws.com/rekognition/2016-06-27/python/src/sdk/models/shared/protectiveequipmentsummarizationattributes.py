from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import protectiveequipmenttype_enum


@dataclass_json
@dataclass
class ProtectiveEquipmentSummarizationAttributes:
    min_confidence: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinConfidence' }})
    required_equipment_types: List[protectiveequipmenttype_enum.ProtectiveEquipmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequiredEquipmentTypes' }})
    
