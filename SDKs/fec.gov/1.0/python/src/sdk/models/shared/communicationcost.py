from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CommunicationCost:
    action_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action_code' }})
    action_code_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action_code_full' }})
    candidate_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_first_name' }})
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_id' }})
    candidate_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_last_name' }})
    candidate_middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_middle_name' }})
    candidate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_name' }})
    candidate_office: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_office' }})
    candidate_office_district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_office_district' }})
    candidate_office_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_office_full' }})
    candidate_office_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_office_state' }})
    committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_id' }})
    committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_name' }})
    communication_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'communication_class' }})
    communication_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'communication_type' }})
    communication_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'communication_type_full' }})
    cycle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycle' }})
    file_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_number' }})
    form_type_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form_type_code' }})
    image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_number' }})
    original_sub_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_sub_id' }})
    pdf_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdf_url' }})
    primary_general_indicator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_general_indicator' }})
    primary_general_indicator_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_general_indicator_description' }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_type' }})
    report_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_year' }})
    schedule_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule_type' }})
    schedule_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule_type_full' }})
    state_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state_full' }})
    sub_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub_id' }})
    support_oppose_indicator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'support_oppose_indicator' }})
    tran_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tran_id' }})
    transaction_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_amount' }})
    transaction_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_type' }})
    
