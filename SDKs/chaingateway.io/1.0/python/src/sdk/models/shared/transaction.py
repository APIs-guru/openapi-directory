from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Transaction:
    amount: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    block_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block_number') }})
    contract_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contract_address') }})
    from_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    gas: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gas') }})
    gas_price: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gas_price') }})
    to: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    token_decimals: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_decimals') }})
    token_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_name') }})
    token_supply: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_supply') }})
    token_symbol: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_symbol') }})
    txid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txid') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
