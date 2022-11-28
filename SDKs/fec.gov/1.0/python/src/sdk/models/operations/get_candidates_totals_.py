from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetCandidatesTotalsOfficeEnum(str, Enum):
    UNKNOWN = ""
    H = "H"
    S = "S"
    P = "P"


@dataclass
class GetCandidatesTotalsQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    candidate_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_id', 'style': 'form', 'explode': True }})
    cycle: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    district: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'district', 'style': 'form', 'explode': True }})
    election_full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'election_full', 'style': 'form', 'explode': True }})
    election_year: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'election_year', 'style': 'form', 'explode': True }})
    federal_funds_flag: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'federal_funds_flag', 'style': 'form', 'explode': True }})
    has_raised_funds: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'has_raised_funds', 'style': 'form', 'explode': True }})
    is_active_candidate: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_active_candidate', 'style': 'form', 'explode': True }})
    max_cash_on_hand_end_period: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_cash_on_hand_end_period', 'style': 'form', 'explode': True }})
    max_debts_owed_by_committee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_debts_owed_by_committee', 'style': 'form', 'explode': True }})
    max_disbursements: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_disbursements', 'style': 'form', 'explode': True }})
    max_receipts: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_receipts', 'style': 'form', 'explode': True }})
    min_cash_on_hand_end_period: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_cash_on_hand_end_period', 'style': 'form', 'explode': True }})
    min_debts_owed_by_committee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_debts_owed_by_committee', 'style': 'form', 'explode': True }})
    min_disbursements: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_disbursements', 'style': 'form', 'explode': True }})
    min_receipts: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_receipts', 'style': 'form', 'explode': True }})
    office: Optional[List[GetCandidatesTotalsOfficeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    party: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'party', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    q: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    state: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCandidatesTotalsRequest:
    query_params: GetCandidatesTotalsQueryParams = field()
    

@dataclass
class GetCandidatesTotalsResponse:
    content_type: str = field()
    status_code: int = field()
    candidate_history_total_page: Optional[shared.CandidateHistoryTotalPage] = field(default=None)
    
