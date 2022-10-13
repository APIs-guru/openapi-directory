from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Transaction:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    block_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'block_number' }})
    contract_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contract_address' }})
    from_: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    gas: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gas' }})
    gas_price: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gas_price' }})
    to: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    token_decimals: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_decimals' }})
    token_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_name' }})
    token_supply: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_supply' }})
    token_symbol: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_symbol' }})
    txid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txid' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
