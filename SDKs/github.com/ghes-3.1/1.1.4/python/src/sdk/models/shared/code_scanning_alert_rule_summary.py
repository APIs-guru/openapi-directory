from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CodeScanningAlertRuleSummarySeverityEnum(str, Enum):
    NONE = "none"
    NOTE = "note"
    WARNING = "warning"
    ERROR = "error"


@dataclass_json
@dataclass
class CodeScanningAlertRuleSummary:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    severity: Optional[CodeScanningAlertRuleSummarySeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    
