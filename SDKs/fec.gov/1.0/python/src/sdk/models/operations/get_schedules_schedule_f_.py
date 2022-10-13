from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetSchedulesScheduleFQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    candidate_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_id', 'style': 'form', 'explode': True }})
    committee_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    cycle: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    image_number: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'image_number', 'style': 'form', 'explode': True }})
    line_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'line_number', 'style': 'form', 'explode': True }})
    max_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_amount', 'style': 'form', 'explode': True }})
    max_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'max_date', 'style': 'form', 'explode': True }})
    max_image_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_image_number', 'style': 'form', 'explode': True }})
    min_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_amount', 'style': 'form', 'explode': True }})
    min_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'min_date', 'style': 'form', 'explode': True }})
    min_image_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_image_number', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    payee_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'payee_name', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSchedulesScheduleFRequest:
    query_params: GetSchedulesScheduleFQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetSchedulesScheduleFDefaultApplicationJSONResults:
    action_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action_code' }})
    action_code_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action_code_full' }})
    aggregate_general_election_expenditure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregate_general_election_expenditure' }})
    back_reference_schedule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'back_reference_schedule_name' }})
    back_reference_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'back_reference_transaction_id' }})
    candidate_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_first_name' }})
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_id' }})
    candidate_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_last_name' }})
    candidate_middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_middle_name' }})
    candidate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_name' }})
    candidate_office: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_office' }})
    candidate_office_district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_office_district' }})
    candidate_office_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_office_full' }})
    candidate_office_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_office_state' }})
    candidate_office_state_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_office_state_full' }})
    candidate_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_prefix' }})
    candidate_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidate_suffix' }})
    catolog_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catolog_code' }})
    catolog_code_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catolog_code_full' }})
    committee: Optional[shared.CommitteeHistory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee' }})
    committee_designated_coordinated_expenditure_indicator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_designated_coordinated_expenditure_indicator' }})
    committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_id' }})
    committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committee_name' }})
    conduit_committee_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conduit_committee_city' }})
    conduit_committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conduit_committee_id' }})
    conduit_committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conduit_committee_name' }})
    conduit_committee_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conduit_committee_state' }})
    conduit_committee_street1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conduit_committee_street1' }})
    conduit_committee_street2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conduit_committee_street2' }})
    conduit_committee_zip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conduit_committee_zip' }})
    designated_committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'designated_committee_id' }})
    designated_committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'designated_committee_name' }})
    election_cycle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'election_cycle' }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type' }})
    entity_type_desc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity_type_desc' }})
    expenditure_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expenditure_amount' }})
    expenditure_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expenditure_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expenditure_purpose_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expenditure_purpose_full' }})
    expenditure_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expenditure_type' }})
    expenditure_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expenditure_type_full' }})
    file_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_number' }})
    filing_form: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filing_form' }})
    image_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_number' }})
    line_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_number' }})
    link_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link_id' }})
    load_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    memo_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo_code' }})
    memo_code_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo_code_full' }})
    memo_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memo_text' }})
    original_sub_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_sub_id' }})
    payee_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_first_name' }})
    payee_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_last_name' }})
    payee_middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_middle_name' }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_name' }})
    pdf_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdf_url' }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_type' }})
    report_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report_year' }})
    schedule_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule_type' }})
    schedule_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule_type_full' }})
    sub_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub_id' }})
    subordinate_committee: Optional[shared.CommitteeHistory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subordinate_committee' }})
    subordinate_committee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subordinate_committee_id' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_id' }})
    unlimited_spending_flag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unlimited_spending_flag' }})
    unlimited_spending_flag_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unlimited_spending_flag_full' }})
    

@dataclass_json
@dataclass
class GetSchedulesScheduleFDefaultApplicationJSON:
    pagination: Optional[shared.OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: Optional[List[GetSchedulesScheduleFDefaultApplicationJSONResults]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class GetSchedulesScheduleFResponse:
    content_type: str = field(default=None)
    get_schedules_schedule_f_default_application_json_object: Optional[GetSchedulesScheduleFDefaultApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
