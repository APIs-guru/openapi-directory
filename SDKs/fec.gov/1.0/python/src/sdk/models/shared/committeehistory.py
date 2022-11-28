from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CommitteeHistory:
    committee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_id') }})
    cycle: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycle') }})
    affiliated_committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affiliated_committee_name') }})
    candidate_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_ids') }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    committee_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_type') }})
    committee_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_type_full') }})
    convert_to_pac_flag: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convert_to_pac_flag') }})
    cycles: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycles') }})
    cycles_has_activity: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycles_has_activity') }})
    cycles_has_financial: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycles_has_financial') }})
    designation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('designation') }})
    designation_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('designation_full') }})
    filing_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filing_frequency') }})
    former_candidate_election_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('former_candidate_election_year') }})
    former_candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('former_candidate_id') }})
    former_candidate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('former_candidate_name') }})
    former_committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('former_committee_name') }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_active') }})
    last_cycle_has_activity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_cycle_has_activity') }})
    last_cycle_has_financial: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_cycle_has_financial') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    organization_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_type') }})
    organization_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_type_full') }})
    party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    party_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party_full') }})
    sponsor_candidate_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sponsor_candidate_ids') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state_full') }})
    street_1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_1') }})
    street_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_2') }})
    treasurer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treasurer_name') }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    
