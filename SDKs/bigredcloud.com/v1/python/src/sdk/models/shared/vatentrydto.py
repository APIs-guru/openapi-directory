from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VatEntryDto:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    vat_rate_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatRateId' }})
    
