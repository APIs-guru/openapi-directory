from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SeveritySummary:
    r"""SeveritySummary
    The number of managed instances found for each patch severity level defined in the request filter.
    """
    
    critical_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CriticalCount') }})
    high_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HighCount') }})
    informational_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InformationalCount') }})
    low_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LowCount') }})
    medium_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediumCount') }})
    unspecified_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnspecifiedCount') }})
    
