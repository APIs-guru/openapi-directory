from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LogGroupField:
    r"""LogGroupField
    The fields contained in log events found by a <code>GetLogGroupFields</code> operation, along with the percentage of queried log events in which each field appears.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent') }})
    
