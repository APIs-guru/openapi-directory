from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CodeScanningAlertRuleSeverityEnum(str, Enum):
    NONE = "none"
    NOTE = "note"
    WARNING = "warning"
    ERROR = "error"


@dataclass_json
@dataclass
class CodeScanningAlertRule:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    full_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('full_description') }})
    help: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('help') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    severity: Optional[CodeScanningAlertRuleSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
