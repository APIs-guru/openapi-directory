from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfigSyslog:
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    localport: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localport') }})
    separator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('separator') }})
    sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence') }})
    server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    serverport: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverport') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
