from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import address


@dataclass_json
@dataclass
class ListAddresses:
    addresses: List[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    ok: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    
