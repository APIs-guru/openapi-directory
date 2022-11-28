from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Net:
    ethernet_connected: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ethernet_connected') }})
    ip_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address') }})
    online: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('online') }})
    
