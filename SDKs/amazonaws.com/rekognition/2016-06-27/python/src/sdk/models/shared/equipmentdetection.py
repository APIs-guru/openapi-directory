from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EquipmentDetection:
    r"""EquipmentDetection
    Information about an item of Personal Protective Equipment (PPE) detected by <a>DetectProtectiveEquipment</a>. For more information, see <a>DetectProtectiveEquipment</a>.
    """
    
    bounding_box: Optional[BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    covers_body_part: Optional[CoversBodyPart] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CoversBodyPart') }})
    type: Optional[ProtectiveEquipmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
