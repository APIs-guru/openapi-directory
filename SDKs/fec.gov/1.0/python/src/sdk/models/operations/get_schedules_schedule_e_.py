from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetSchedulesScheduleECandidateOfficeEnum(str, Enum):
    UNKNOWN = ""
    H = "H"
    S = "S"
    P = "P"

class GetSchedulesScheduleESupportOpposeIndicatorEnum(str, Enum):
    S = "S"
    O = "O"


@dataclass
class GetSchedulesScheduleEQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    candidate_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_id', 'style': 'form', 'explode': True }})
    candidate_office: Optional[List[GetSchedulesScheduleECandidateOfficeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_office', 'style': 'form', 'explode': True }})
    candidate_office_district: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_office_district', 'style': 'form', 'explode': True }})
    candidate_office_state: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_office_state', 'style': 'form', 'explode': True }})
    candidate_party: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_party', 'style': 'form', 'explode': True }})
    committee_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    cycle: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    filing_form: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'filing_form', 'style': 'form', 'explode': True }})
    image_number: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'image_number', 'style': 'form', 'explode': True }})
    is_notice: Optional[List[bool]] = field(default=None, metadata={'query_param': { 'field_name': 'is_notice', 'style': 'form', 'explode': True }})
    last_expenditure_amount: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'last_expenditure_amount', 'style': 'form', 'explode': True }})
    last_expenditure_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'last_expenditure_date', 'style': 'form', 'explode': True }})
    last_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'last_index', 'style': 'form', 'explode': True }})
    last_office_total_ytd: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'last_office_total_ytd', 'style': 'form', 'explode': True }})
    last_support_oppose_indicator: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_support_oppose_indicator', 'style': 'form', 'explode': True }})
    line_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'line_number', 'style': 'form', 'explode': True }})
    max_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_amount', 'style': 'form', 'explode': True }})
    max_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_date', 'style': 'form', 'explode': True }})
    max_dissemination_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_dissemination_date', 'style': 'form', 'explode': True }})
    max_filing_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_filing_date', 'style': 'form', 'explode': True }})
    max_image_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_image_number', 'style': 'form', 'explode': True }})
    min_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_amount', 'style': 'form', 'explode': True }})
    min_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_date', 'style': 'form', 'explode': True }})
    min_dissemination_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_dissemination_date', 'style': 'form', 'explode': True }})
    min_filing_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_filing_date', 'style': 'form', 'explode': True }})
    min_image_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_image_number', 'style': 'form', 'explode': True }})
    most_recent: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'most_recent', 'style': 'form', 'explode': True }})
    payee_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'payee_name', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    support_oppose_indicator: Optional[List[GetSchedulesScheduleESupportOpposeIndicatorEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'support_oppose_indicator', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSchedulesScheduleERequest:
    query_params: GetSchedulesScheduleEQueryParams = field()
    

@dataclass
class GetSchedulesScheduleEResponse:
    content_type: str = field()
    status_code: int = field()
    schedule_e_page: Optional[shared.ScheduleEPage] = field(default=None)
    
