from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CommitteeHistory:
    affiliated_committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affiliated_committee_name' }})
    candidate_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_ids' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    committee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_id' }})
    committee_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_type' }})
    committee_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_type_full' }})
    convert_to_pac_flag: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'convert_to_pac_flag' }})
    cycle: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycle' }})
    cycles: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycles' }})
    cycles_has_activity: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycles_has_activity' }})
    cycles_has_financial: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycles_has_financial' }})
    designation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'designation' }})
    designation_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'designation_full' }})
    filing_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filing_frequency' }})
    former_candidate_election_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'former_candidate_election_year' }})
    former_candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'former_candidate_id' }})
    former_candidate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'former_candidate_name' }})
    former_committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'former_committee_name' }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_active' }})
    last_cycle_has_activity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_cycle_has_activity' }})
    last_cycle_has_financial: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_cycle_has_financial' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_type' }})
    organization_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_type_full' }})
    party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party' }})
    party_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party_full' }})
    sponsor_candidate_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sponsor_candidate_ids' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state_full' }})
    street_1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street_1' }})
    street_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street_2' }})
    treasurer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treasurer_name' }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip' }})
    
