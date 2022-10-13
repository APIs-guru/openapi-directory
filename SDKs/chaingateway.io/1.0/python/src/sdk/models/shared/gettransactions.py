from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import transaction


@dataclass_json
@dataclass
class GetTransactions:
    ok: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    transactions: List[transaction.Transaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    
