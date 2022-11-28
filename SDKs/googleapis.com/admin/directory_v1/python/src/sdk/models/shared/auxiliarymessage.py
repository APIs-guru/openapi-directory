from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AuxiliaryMessageSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    SEVERITY_INFO = "SEVERITY_INFO"
    SEVERITY_WARNING = "SEVERITY_WARNING"
    SEVERITY_ERROR = "SEVERITY_ERROR"


@dataclass_json
@dataclass
class AuxiliaryMessage:
    r"""AuxiliaryMessage
    Auxiliary message about issues with printers or settings. Example: {message_type:AUXILIARY_MESSAGE_WARNING, field_mask:make_and_model, message:\"Given printer is invalid or no longer supported.\"}
    """
    
    auxiliary_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auxiliaryMessage') }})
    field_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldMask') }})
    severity: Optional[AuxiliaryMessageSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    
