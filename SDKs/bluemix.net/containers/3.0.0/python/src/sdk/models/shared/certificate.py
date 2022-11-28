from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Certificate:
    ca_cert: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ca_cert') }})
    server_cert: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_cert') }})
    user_cert: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_cert') }})
    user_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_key') }})
    
