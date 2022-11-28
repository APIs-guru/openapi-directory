from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetBlock:
    block_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block_number') }})
    difficulty: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('difficulty') }})
    gas_limit: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gas_limit') }})
    gas_used: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gas_used') }})
    hash: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash') }})
    miner: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('miner') }})
    ok: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    parent_hash: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_hash') }})
    size_in_bytes: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size_in_bytes') }})
    time_stamp: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_stamp') }})
    transactions_count: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions_count') }})
    
