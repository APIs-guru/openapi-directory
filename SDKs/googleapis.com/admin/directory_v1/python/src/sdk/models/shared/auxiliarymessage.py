from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AuxiliaryMessageSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    SEVERITY_INFO = "SEVERITY_INFO"
    SEVERITY_WARNING = "SEVERITY_WARNING"
    SEVERITY_ERROR = "SEVERITY_ERROR"


@dataclass_json
@dataclass
class AuxiliaryMessage:
    auxiliary_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auxiliaryMessage' }})
    field_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldMask' }})
    severity: Optional[AuxiliaryMessageSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    
