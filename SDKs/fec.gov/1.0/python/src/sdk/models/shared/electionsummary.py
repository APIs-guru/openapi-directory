from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ElectionSummary:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    disbursements: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursements' }})
    independent_expenditures: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'independent_expenditures' }})
    receipts: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receipts' }})
    
