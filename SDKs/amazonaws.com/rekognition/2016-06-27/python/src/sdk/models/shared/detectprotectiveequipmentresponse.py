from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import protectiveequipmentperson
from . import protectiveequipmentsummary


@dataclass_json
@dataclass
class DetectProtectiveEquipmentResponse:
    persons: Optional[List[protectiveequipmentperson.ProtectiveEquipmentPerson]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Persons' }})
    protective_equipment_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProtectiveEquipmentModelVersion' }})
    summary: Optional[protectiveequipmentsummary.ProtectiveEquipmentSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Summary' }})
    
