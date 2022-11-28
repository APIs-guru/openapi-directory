from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SendToken:
    amount: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    contractaddress: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractaddress') }})
    from_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    ok: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    to: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    txid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txid') }})
    
