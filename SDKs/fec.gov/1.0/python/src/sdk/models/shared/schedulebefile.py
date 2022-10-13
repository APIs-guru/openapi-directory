from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import committeehistory
from . import efilings


@dataclass_json
@dataclass
class ScheduleBEfile:
    amendment_indicator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendment_indicator' }})
    back_reference_schedule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'back_reference_schedule_name' }})
    back_reference_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'back_reference_transaction_id' }})
    beginning_image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beginning_image_number' }})
    beneficiary_committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beneficiary_committee_name' }})
    candidate_office: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_office' }})
    candidate_office_district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_office_district' }})
    committee: Optional[committeehistory.CommitteeHistory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee' }})
    committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_id' }})
    csv_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csv_url' }})
    disbursement_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursement_amount' }})
    disbursement_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursement_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disbursement_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursement_description' }})
    disbursement_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disbursement_type' }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    fec_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fec_url' }})
    file_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_number' }})
    filing: Optional[efilings.EFilings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filing' }})
    image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_number' }})
    is_notice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_notice' }})
    line_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_number' }})
    load_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    memo_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo_code' }})
    memo_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo_text' }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_name' }})
    pdf_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdf_url' }})
    recipient_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_city' }})
    recipient_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_name' }})
    recipient_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_prefix' }})
    recipient_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_state' }})
    recipient_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_suffix' }})
    recipient_zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_zip' }})
    related_line_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related_line_number' }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_type' }})
    semi_annual_bundled_refund: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'semi_annual_bundled_refund' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_id' }})
    
