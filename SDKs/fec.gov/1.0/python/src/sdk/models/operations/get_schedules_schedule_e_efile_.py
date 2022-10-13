from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from sdk.models import shared

class GetSchedulesScheduleEEfileCandidateOfficeEnum(str, Enum):
    UNKNOWN = ""
    H = "H"
    S = "S"
    P = "P"

class GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum(str, Enum):
    S = "S"
    O = "O"


@dataclass
class GetSchedulesScheduleEEfileQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    candidate_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_id', 'style': 'form', 'explode': True }})
    candidate_office: Optional[GetSchedulesScheduleEEfileCandidateOfficeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_office', 'style': 'form', 'explode': True }})
    candidate_office_district: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_office_district', 'style': 'form', 'explode': True }})
    candidate_office_state: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_office_state', 'style': 'form', 'explode': True }})
    candidate_party: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_party', 'style': 'form', 'explode': True }})
    candidate_search: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_search', 'style': 'form', 'explode': True }})
    committee_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    filing_form: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'filing_form', 'style': 'form', 'explode': True }})
    image_number: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'image_number', 'style': 'form', 'explode': True }})
    is_notice: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_notice', 'style': 'form', 'explode': True }})
    max_dissemination_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'max_dissemination_date', 'style': 'form', 'explode': True }})
    max_expenditure_amount: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_expenditure_amount', 'style': 'form', 'explode': True }})
    max_expenditure_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'max_expenditure_date', 'style': 'form', 'explode': True }})
    max_filed_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'max_filed_date', 'style': 'form', 'explode': True }})
    min_dissemination_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'min_dissemination_date', 'style': 'form', 'explode': True }})
    min_expenditure_amount: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'min_expenditure_amount', 'style': 'form', 'explode': True }})
    min_expenditure_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'min_expenditure_date', 'style': 'form', 'explode': True }})
    min_filed_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'min_filed_date', 'style': 'form', 'explode': True }})
    most_recent: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'most_recent', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    payee_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'payee_name', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    spender_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'spender_name', 'style': 'form', 'explode': True }})
    support_oppose_indicator: Optional[List[GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'support_oppose_indicator', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSchedulesScheduleEEfileRequest:
    query_params: GetSchedulesScheduleEEfileQueryParams = field(default=None)
    

@dataclass
class GetSchedulesScheduleEEfileResponse:
    content_type: str = field(default=None)
    schedule_e_efile_page: Optional[shared.ScheduleEEfilePage] = field(default=None)
    status_code: int = field(default=None)
    
