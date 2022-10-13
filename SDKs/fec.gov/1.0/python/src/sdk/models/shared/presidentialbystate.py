from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PresidentialByState:
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_id' }})
    contribution_receipt_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contribution_receipt_amount' }})
    contribution_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contribution_state' }})
    election_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'election_year' }})
    
