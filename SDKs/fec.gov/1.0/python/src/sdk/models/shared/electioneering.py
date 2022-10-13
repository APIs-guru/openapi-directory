from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Electioneering:
    amendment_indicator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendment_indicator' }})
    beginning_image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beginning_image_number' }})
    calculated_candidate_share: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calculated_candidate_share' }})
    candidate_district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_district' }})
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_id' }})
    candidate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_name' }})
    candidate_office: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_office' }})
    candidate_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_state' }})
    committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_id' }})
    committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_name' }})
    communication_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'communication_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disbursement_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursement_amount' }})
    disbursement_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursement_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    election_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'election_type' }})
    file_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_number' }})
    link_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link_id' }})
    number_of_candidates: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_of_candidates' }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_name' }})
    payee_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_state' }})
    pdf_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdf_url' }})
    public_distribution_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_distribution_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    purpose_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose_description' }})
    receipt_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receipt_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    report_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_year' }})
    sb_image_num: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sb_image_num' }})
    sb_link_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sb_link_id' }})
    sub_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub_id' }})
    
