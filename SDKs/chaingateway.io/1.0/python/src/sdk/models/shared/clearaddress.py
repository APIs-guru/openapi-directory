from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClearAddress:
    amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    ethereumaddress: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ethereumaddress') }})
    gas: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gas') }})
    newaddress: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newaddress') }})
    ok: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    total: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    txid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txid') }})
    
