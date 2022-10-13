from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount


@dataclass_json
@dataclass
class Tax:
    amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    tax_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxType' }})
    
