from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CandidateHistory:
    candidate_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_id') }})
    two_year_period: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('two_year_period') }})
    active_through: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active_through') }})
    address_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_city') }})
    address_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_state') }})
    address_street_1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_street_1') }})
    address_street_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_street_2') }})
    address_zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_zip') }})
    candidate_election_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_election_year') }})
    candidate_inactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_inactive') }})
    candidate_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_status') }})
    cycles: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycles') }})
    district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('district') }})
    district_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('district_number') }})
    election_districts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_districts') }})
    election_years: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_years') }})
    fec_cycles_in_election: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fec_cycles_in_election') }})
    first_file_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_file_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    flags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flags') }})
    incumbent_challenge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incumbent_challenge') }})
    incumbent_challenge_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incumbent_challenge_full') }})
    last_f2_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_f2_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_file_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_file_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    load_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    office: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('office') }})
    office_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('office_full') }})
    party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    party_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party_full') }})
    rounded_election_years: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rounded_election_years') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
