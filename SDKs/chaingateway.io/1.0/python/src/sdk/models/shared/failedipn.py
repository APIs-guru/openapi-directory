from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FailedIpn:
    action: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    contractaddress: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractaddress') }})
    ethereumaddress: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ethereumaddress') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    timestamp: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
