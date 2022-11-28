from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScheduleEEfile:
    file_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_number') }})
    related_line_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related_line_number') }})
    amendment_indicator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amendment_indicator') }})
    back_reference_schedule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('back_reference_schedule_name') }})
    back_reference_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('back_reference_transaction_id') }})
    beginning_image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beginning_image_number') }})
    candidate_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_first_name') }})
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_id') }})
    candidate_middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_middle_name') }})
    candidate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_name') }})
    candidate_office: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_office') }})
    candidate_office_district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_office_district') }})
    candidate_office_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_office_state') }})
    candidate_party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_party') }})
    candidate_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_prefix') }})
    candidate_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_suffix') }})
    category_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_code') }})
    committee: Optional[CommitteeHistory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee') }})
    committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_id') }})
    csv_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csv_url') }})
    dissemination_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dissemination_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    expenditure_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expenditure_amount') }})
    expenditure_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expenditure_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expenditure_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expenditure_description') }})
    fec_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fec_url') }})
    filer_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filer_first_name') }})
    filer_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filer_last_name') }})
    filer_middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filer_middle_name') }})
    filer_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filer_prefix') }})
    filer_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filer_suffix') }})
    filing: Optional[EFilings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filing') }})
    filing_form: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filing_form') }})
    image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_number') }})
    is_notice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_notice') }})
    line_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_number') }})
    load_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    memo_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo_code') }})
    memo_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo_text') }})
    most_recent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('most_recent') }})
    notary_sign_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notary_sign_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    office_total_ytd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('office_total_ytd') }})
    payee_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_city') }})
    payee_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_first_name') }})
    payee_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_last_name') }})
    payee_middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_middle_name') }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_name') }})
    payee_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_prefix') }})
    payee_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_state') }})
    payee_street_1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_street_1') }})
    payee_street_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_street_2') }})
    payee_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_suffix') }})
    payee_zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_zip') }})
    pdf_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdf_url') }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_type') }})
    support_oppose_indicator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('support_oppose_indicator') }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_id') }})
    
