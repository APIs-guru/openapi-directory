from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SyslogMsg:
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    separator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('separator') }})
    sequence: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
