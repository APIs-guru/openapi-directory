from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProtectiveEquipmentSummarizationAttributes:
    r"""ProtectiveEquipmentSummarizationAttributes
    Specifies summary attributes to return from a call to <a>DetectProtectiveEquipment</a>. You can specify which types of PPE to summarize. You can also specify a minimum confidence value for detections. Summary information is returned in the <code>Summary</code> (<a>ProtectiveEquipmentSummary</a>) field of the response from <code>DetectProtectiveEquipment</code>. The summary includes which persons in an image were detected wearing the requested types of person protective equipment (PPE), which persons were detected as not wearing PPE, and the persons in which a determination could not be made. For more information, see <a>ProtectiveEquipmentSummary</a>.
    """
    
    min_confidence: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinConfidence') }})
    required_equipment_types: List[ProtectiveEquipmentTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiredEquipmentTypes') }})
    
