from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComplianceItemEntry:
    r"""ComplianceItemEntry
    Information about a compliance item.
    """
    
    severity: ComplianceSeverityEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Severity') }})
    status: ComplianceStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Details') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    
