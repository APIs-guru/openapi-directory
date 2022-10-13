from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bankaccountdto


@dataclass_json
@dataclass
class BatchItemBankAccountDto:
    item: Optional[bankaccountdto.BankAccountDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    op_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opCode' }})
    
