from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSchedulesScheduleDQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    candidate_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_id', 'style': 'form', 'explode': True }})
    committee_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    creditor_debtor_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'creditor_debtor_name', 'style': 'form', 'explode': True }})
    image_number: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'image_number', 'style': 'form', 'explode': True }})
    max_amount_incurred: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_amount_incurred', 'style': 'form', 'explode': True }})
    max_amount_outstanding_beginning: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_amount_outstanding_beginning', 'style': 'form', 'explode': True }})
    max_amount_outstanding_close: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_amount_outstanding_close', 'style': 'form', 'explode': True }})
    max_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_date', 'style': 'form', 'explode': True }})
    max_image_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_image_number', 'style': 'form', 'explode': True }})
    max_payment_period: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_payment_period', 'style': 'form', 'explode': True }})
    min_amount_incurred: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_amount_incurred', 'style': 'form', 'explode': True }})
    min_amount_outstanding_beginning: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_amount_outstanding_beginning', 'style': 'form', 'explode': True }})
    min_amount_outstanding_close: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_amount_outstanding_close', 'style': 'form', 'explode': True }})
    min_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_date', 'style': 'form', 'explode': True }})
    min_image_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_image_number', 'style': 'form', 'explode': True }})
    min_payment_period: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_payment_period', 'style': 'form', 'explode': True }})
    nature_of_debt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nature_of_debt', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetSchedulesScheduleDDefaultApplicationJSONResults:
    action_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_code') }})
    action_code_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_code_full') }})
    amount_incurred_period: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount_incurred_period') }})
    candidate_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_first_name') }})
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_id') }})
    candidate_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_last_name') }})
    candidate_office: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_office') }})
    candidate_office_district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_office_district') }})
    candidate_office_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_office_state') }})
    candidate_office_state_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_office_state_full') }})
    canidate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canidate_name') }})
    committee: Optional[shared.CommitteeHistory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee') }})
    committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_id') }})
    committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_name') }})
    conduit_committee_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conduit_committee_city') }})
    conduit_committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conduit_committee_id') }})
    conduit_committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conduit_committee_name') }})
    conduit_committee_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conduit_committee_state') }})
    conduit_committee_street1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conduit_committee_street1') }})
    conduit_committee_street2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conduit_committee_street2') }})
    conduit_committee_zip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conduit_committee_zip') }})
    creditor_debtor_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditor_debtor_city') }})
    creditor_debtor_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditor_debtor_first_name') }})
    creditor_debtor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditor_debtor_id') }})
    creditor_debtor_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditor_debtor_last_name') }})
    creditor_debtor_middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditor_debtor_middle_name') }})
    creditor_debtor_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditor_debtor_name') }})
    creditor_debtor_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditor_debtor_prefix') }})
    creditor_debtor_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditor_debtor_state') }})
    creditor_debtor_street1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditor_debtor_street1') }})
    creditor_debtor_street2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditor_debtor_street2') }})
    creditor_debtor_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditor_debtor_suffix') }})
    election_cycle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_cycle') }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    file_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_number') }})
    filing_form: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filing_form') }})
    image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_number') }})
    line_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_number') }})
    link_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_id') }})
    load_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    nature_of_debt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nature_of_debt') }})
    original_sub_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_sub_id') }})
    outstanding_balance_beginning_of_period: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outstanding_balance_beginning_of_period') }})
    outstanding_balance_close_of_period: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outstanding_balance_close_of_period') }})
    payment_period: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_period') }})
    pdf_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdf_url') }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_type') }})
    report_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report_year') }})
    schedule_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_type') }})
    schedule_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_type_full') }})
    sub_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub_id') }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_id') }})
    

@dataclass_json
@dataclass
class GetSchedulesScheduleDDefaultApplicationJSON:
    pagination: Optional[shared.OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    results: Optional[List[GetSchedulesScheduleDDefaultApplicationJSONResults]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass
class GetSchedulesScheduleDRequest:
    query_params: GetSchedulesScheduleDQueryParams = field()
    

@dataclass
class GetSchedulesScheduleDResponse:
    content_type: str = field()
    status_code: int = field()
    get_schedules_schedule_d_default_application_json_object: Optional[GetSchedulesScheduleDDefaultApplicationJSON] = field(default=None)
    
