from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProtectiveEquipmentSummary:
    persons_indeterminate: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PersonsIndeterminate' }})
    persons_with_required_equipment: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PersonsWithRequiredEquipment' }})
    persons_without_required_equipment: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PersonsWithoutRequiredEquipment' }})
    
