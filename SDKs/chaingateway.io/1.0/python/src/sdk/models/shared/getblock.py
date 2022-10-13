from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetBlock:
    block_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block_number' }})
    difficulty: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'difficulty' }})
    gas_limit: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gas_limit' }})
    gas_used: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gas_used' }})
    hash: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hash' }})
    miner: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'miner' }})
    ok: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    parent_hash: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_hash' }})
    size_in_bytes: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size_in_bytes' }})
    time_stamp: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_stamp' }})
    transactions_count: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions_count' }})
    
