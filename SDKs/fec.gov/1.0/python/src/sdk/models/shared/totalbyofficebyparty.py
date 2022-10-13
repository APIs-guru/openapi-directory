from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TotalByOfficeByParty:
    election_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'election_year' }})
    office: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'office' }})
    party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party' }})
    total_disbursements: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_disbursements' }})
    total_receipts: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_receipts' }})
    
