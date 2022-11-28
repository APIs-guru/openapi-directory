from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Range:
    r"""Range
    Identifies where the sensitive data begins and ends.
    """
    
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('End') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Start') }})
    start_column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartColumn') }})
    
