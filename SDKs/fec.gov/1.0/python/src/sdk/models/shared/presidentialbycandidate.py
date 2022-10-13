from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PresidentialByCandidate:
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_id' }})
    candidate_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_last_name' }})
    candidate_party_affiliation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_party_affiliation' }})
    contributor_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_state' }})
    election_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'election_year' }})
    net_receipts: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net_receipts' }})
    rounded_net_receipts: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rounded_net_receipts' }})
    
