from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import date


@dataclass_json
@dataclass
class Payment:
    amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
