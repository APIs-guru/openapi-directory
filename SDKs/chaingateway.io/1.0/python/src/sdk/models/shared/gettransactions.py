from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetTransactions:
    ok: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    transactions: List[Transaction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    
