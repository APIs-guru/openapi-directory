from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSchedulesScheduleFSubIDPathParams:
    sub_id: str = field(metadata={'path_param': { 'field_name': 'sub_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSchedulesScheduleFSubIDQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetSchedulesScheduleFSubIDDefaultApplicationJSONResults:
    action_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_code') }})
    action_code_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_code_full') }})
    aggregate_general_election_expenditure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregate_general_election_expenditure') }})
    back_reference_schedule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('back_reference_schedule_name') }})
    back_reference_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('back_reference_transaction_id') }})
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
    catolog_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catolog_code') }})
    catolog_code_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catolog_code_full') }})
    committee: Optional[shared.CommitteeHistory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee') }})
    committee_designated_coordinated_expenditure_indicator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_designated_coordinated_expenditure_indicator') }})
    committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_id') }})
    committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_name') }})
    conduit_committee_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conduit_committee_city') }})
    conduit_committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conduit_committee_id') }})
    conduit_committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conduit_committee_name') }})
    conduit_committee_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conduit_committee_state') }})
    conduit_committee_street1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conduit_committee_street1') }})
    conduit_committee_street2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conduit_committee_street2') }})
    conduit_committee_zip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conduit_committee_zip') }})
    designated_committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('designated_committee_id') }})
    designated_committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('designated_committee_name') }})
    election_cycle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_cycle') }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    entity_type_desc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type_desc') }})
    expenditure_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expenditure_amount') }})
    expenditure_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expenditure_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expenditure_purpose_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expenditure_purpose_full') }})
    expenditure_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expenditure_type') }})
    expenditure_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expenditure_type_full') }})
    file_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_number') }})
    filing_form: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filing_form') }})
    image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_number') }})
    line_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_number') }})
    link_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_id') }})
    load_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    memo_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo_code') }})
    memo_code_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo_code_full') }})
    memo_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo_text') }})
    original_sub_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_sub_id') }})
    payee_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_first_name') }})
    payee_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_last_name') }})
    payee_middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_middle_name') }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_name') }})
    pdf_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdf_url') }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_type') }})
    report_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_year') }})
    schedule_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_type') }})
    schedule_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_type_full') }})
    sub_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub_id') }})
    subordinate_committee: Optional[shared.CommitteeHistory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subordinate_committee') }})
    subordinate_committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subordinate_committee_id') }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_id') }})
    unlimited_spending_flag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlimited_spending_flag') }})
    unlimited_spending_flag_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unlimited_spending_flag_full') }})
    

@dataclass_json
@dataclass
class GetSchedulesScheduleFSubIDDefaultApplicationJSON:
    pagination: Optional[shared.OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    results: Optional[List[GetSchedulesScheduleFSubIDDefaultApplicationJSONResults]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass
class GetSchedulesScheduleFSubIDRequest:
    path_params: GetSchedulesScheduleFSubIDPathParams = field()
    query_params: GetSchedulesScheduleFSubIDQueryParams = field()
    

@dataclass
class GetSchedulesScheduleFSubIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_schedules_schedule_f_sub_id_default_application_json_object: Optional[GetSchedulesScheduleFSubIDDefaultApplicationJSON] = field(default=None)
    
