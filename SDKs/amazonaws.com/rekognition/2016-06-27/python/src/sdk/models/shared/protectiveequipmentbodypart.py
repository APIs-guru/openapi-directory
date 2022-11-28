from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProtectiveEquipmentBodyPart:
    r"""ProtectiveEquipmentBodyPart
    Information about a body part detected by <a>DetectProtectiveEquipment</a> that contains PPE. An array of <code>ProtectiveEquipmentBodyPart</code> objects is returned for each person detected by <code>DetectProtectiveEquipment</code>. 
    """
    
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    equipment_detections: Optional[List[EquipmentDetection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EquipmentDetections') }})
    name: Optional[BodyPartEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
