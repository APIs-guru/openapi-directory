from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProtectiveEquipmentPerson:
    r"""ProtectiveEquipmentPerson
    A person detected by a call to <a>DetectProtectiveEquipment</a>. The API returns all persons detected in the input image in an array of <code>ProtectiveEquipmentPerson</code> objects.
    """
    
    body_parts: Optional[List[ProtectiveEquipmentBodyPart]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BodyParts') }})
    bounding_box: Optional[BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    
