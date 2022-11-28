from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectProtectiveEquipmentResponse:
    persons: Optional[List[ProtectiveEquipmentPerson]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Persons') }})
    protective_equipment_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectiveEquipmentModelVersion') }})
    summary: Optional[ProtectiveEquipmentSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    
