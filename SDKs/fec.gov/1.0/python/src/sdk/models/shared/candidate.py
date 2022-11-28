from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CandidatePrincipalCommittees:
    committee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_id') }})
    affiliated_committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affiliated_committee_name') }})
    candidate_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_ids') }})
    committee_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_type') }})
    committee_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_type_full') }})
    cycles: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycles') }})
    designation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('designation') }})
    designation_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('designation_full') }})
    filing_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filing_frequency') }})
    first_file_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_file_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_f1_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_f1_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_file_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_file_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    organization_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_type') }})
    organization_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_type_full') }})
    party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    party_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party_full') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    treasurer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treasurer_name') }})
    

@dataclass_json
@dataclass
class Candidate:
    active_through: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active_through') }})
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_id') }})
    candidate_inactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_inactive') }})
    candidate_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_status') }})
    cycles: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycles') }})
    district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('district') }})
    district_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('district_number') }})
    election_districts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_districts') }})
    election_years: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_years') }})
    federal_funds_flag: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('federal_funds_flag') }})
    first_file_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_file_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    has_raised_funds: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_raised_funds') }})
    inactive_election_years: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inactive_election_years') }})
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
    principal_committees: Optional[List[CandidatePrincipalCommittees]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principal_committees') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
