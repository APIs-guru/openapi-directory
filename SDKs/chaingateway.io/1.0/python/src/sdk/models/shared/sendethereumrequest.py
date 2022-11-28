from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SendEthereumRequest:
    amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    from_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    to: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
