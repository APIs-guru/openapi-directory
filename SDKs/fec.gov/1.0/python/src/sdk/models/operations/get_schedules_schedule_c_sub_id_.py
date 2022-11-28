from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSchedulesScheduleCSubIDPathParams:
    sub_id: str = field(metadata={'path_param': { 'field_name': 'sub_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSchedulesScheduleCSubIDQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetSchedulesScheduleCSubIDDefaultApplicationJSONResults:
    action_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_code') }})
    action_code_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_code_full') }})
    candidate_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_first_name') }})
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_id') }})
    candidate_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_last_name') }})
    candidate_middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_middle_name') }})
    candidate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_name') }})
    candidate_office: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_office') }})
    candidate_office_district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_office_district') }})
    candidate_office_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_office_full') }})
    candidate_office_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_office_state') }})
    candidate_office_state_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_office_state_full') }})
    candidate_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_prefix') }})
    candidate_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_suffix') }})
    committee: Optional[shared.CommitteeHistory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee') }})
    committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_id') }})
    cycle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycle') }})
    due_date_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_date_terms') }})
    election_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_type') }})
    election_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_type_full') }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    entity_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type_full') }})
    fec_committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fec_committee_id') }})
    fec_election_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fec_election_type_full') }})
    fec_election_type_year: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fec_election_type_year') }})
    file_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_number') }})
    filing_form: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filing_form') }})
    image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_number') }})
    incurred_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incurred_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    interest_rate_terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interest_rate_terms') }})
    line_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_number') }})
    link_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_id') }})
    load_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    loan_balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loan_balance') }})
    loan_source_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loan_source_city') }})
    loan_source_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loan_source_first_name') }})
    loan_source_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loan_source_last_name') }})
    loan_source_middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loan_source_middle_name') }})
    loan_source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loan_source_name') }})
    loan_source_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loan_source_prefix') }})
    loan_source_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loan_source_state') }})
    loan_source_street_1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loan_source_street_1') }})
    loan_source_street_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loan_source_street_2') }})
    loan_source_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loan_source_suffix') }})
    loan_source_zip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loan_source_zip') }})
    memo_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo_code') }})
    memo_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo_text') }})
    original_loan_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_loan_amount') }})
    original_sub_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_sub_id') }})
    payment_to_date: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_to_date') }})
    pdf_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdf_url') }})
    personally_funded: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personally_funded') }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_type') }})
    report_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_year') }})
    schedule_a_line_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_a_line_number') }})
    schedule_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_type') }})
    schedule_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_type_full') }})
    secured_ind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secured_ind') }})
    sub_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub_id') }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_id') }})
    

@dataclass_json
@dataclass
class GetSchedulesScheduleCSubIDDefaultApplicationJSON:
    pagination: Optional[shared.OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    results: Optional[List[GetSchedulesScheduleCSubIDDefaultApplicationJSONResults]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass
class GetSchedulesScheduleCSubIDRequest:
    path_params: GetSchedulesScheduleCSubIDPathParams = field()
    query_params: GetSchedulesScheduleCSubIDQueryParams = field()
    

@dataclass
class GetSchedulesScheduleCSubIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_schedules_schedule_c_sub_id_default_application_json_object: Optional[GetSchedulesScheduleCSubIDDefaultApplicationJSON] = field(default=None)
    
