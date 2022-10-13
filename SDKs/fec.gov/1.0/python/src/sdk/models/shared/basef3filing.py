from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BaseF3Filing:
    amended_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amended_address' }})
    amended_by: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amended_by' }})
    amendment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendment' }})
    amendment_chain: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendment_chain' }})
    beginning_image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beginning_image_number' }})
    candidate_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_first_name' }})
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_id' }})
    candidate_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_last_name' }})
    candidate_middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_middle_name' }})
    candidate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_name' }})
    candidate_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_prefix' }})
    candidate_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_suffix' }})
    cash_on_hand_beginning_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cash_on_hand_beginning_period' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_id' }})
    committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_name' }})
    coverage_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverage_end_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    coverage_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverage_start_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    csv_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csv_url' }})
    district: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'district' }})
    document_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_description' }})
    election_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'election_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    election_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'election_state' }})
    f3z1: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'f3z1' }})
    fec_file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fec_file_id' }})
    fec_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fec_url' }})
    file_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_number' }})
    general_election: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'general_election' }})
    is_amended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_amended' }})
    most_recent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'most_recent' }})
    most_recent_filing: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'most_recent_filing' }})
    pdf_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdf_url' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    primary_election: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_election' }})
    receipt_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receipt_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    report: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report' }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_type' }})
    report_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_year' }})
    rpt_pgi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rpt_pgi' }})
    runoff_election: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runoff_election' }})
    sign_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sign_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    special_election: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'special_election' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    street_1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street_1' }})
    street_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street_2' }})
    suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suffix' }})
    summary_lines: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary_lines' }})
    treasurer_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treasurer_first_name' }})
    treasurer_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treasurer_last_name' }})
    treasurer_middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treasurer_middle_name' }})
    treasurer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treasurer_name' }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip' }})
    
