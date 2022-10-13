from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CommitteeSponsorCandidateList:
    sponsor_candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sponsor_candidate_id' }})
    sponsor_candidate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sponsor_candidate_name' }})
    

@dataclass_json
@dataclass
class Committee:
    affiliated_committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affiliated_committee_name' }})
    candidate_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_ids' }})
    committee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_id' }})
    committee_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_type' }})
    committee_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_type_full' }})
    cycles: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycles' }})
    designation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'designation' }})
    designation_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'designation_full' }})
    filing_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filing_frequency' }})
    first_file_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_file_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_f1_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_f1_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_file_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_file_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_type' }})
    organization_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_type_full' }})
    party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party' }})
    party_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party_full' }})
    sponsor_candidate_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sponsor_candidate_ids' }})
    sponsor_candidate_list: Optional[List[CommitteeSponsorCandidateList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sponsor_candidate_list' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    treasurer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treasurer_name' }})
    
