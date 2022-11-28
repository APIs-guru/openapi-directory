from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCommitteeCommitteeIDReportsPathParams:
    committee_id: str = field(metadata={'path_param': { 'field_name': 'committee_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCommitteeCommitteeIDReportsQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    beginning_image_number: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'beginning_image_number', 'style': 'form', 'explode': True }})
    candidate_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_id', 'style': 'form', 'explode': True }})
    cycle: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    is_amended: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_amended', 'style': 'form', 'explode': True }})
    max_cash_on_hand_end_period_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_cash_on_hand_end_period_amount', 'style': 'form', 'explode': True }})
    max_debts_owed_expenditures: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_debts_owed_expenditures', 'style': 'form', 'explode': True }})
    max_disbursements_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_disbursements_amount', 'style': 'form', 'explode': True }})
    max_independent_expenditures: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_independent_expenditures', 'style': 'form', 'explode': True }})
    max_party_coordinated_expenditures: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_party_coordinated_expenditures', 'style': 'form', 'explode': True }})
    max_receipts_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_receipts_amount', 'style': 'form', 'explode': True }})
    max_total_contributions: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_total_contributions', 'style': 'form', 'explode': True }})
    min_cash_on_hand_end_period_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_cash_on_hand_end_period_amount', 'style': 'form', 'explode': True }})
    min_debts_owed_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_debts_owed_amount', 'style': 'form', 'explode': True }})
    min_disbursements_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_disbursements_amount', 'style': 'form', 'explode': True }})
    min_independent_expenditures: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_independent_expenditures', 'style': 'form', 'explode': True }})
    min_party_coordinated_expenditures: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_party_coordinated_expenditures', 'style': 'form', 'explode': True }})
    min_receipts_amount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_receipts_amount', 'style': 'form', 'explode': True }})
    min_total_contributions: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_total_contributions', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    report_type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'report_type', 'style': 'form', 'explode': True }})
    sort: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    year: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCommitteeCommitteeIDReportsRequest:
    path_params: GetCommitteeCommitteeIDReportsPathParams = field()
    query_params: GetCommitteeCommitteeIDReportsQueryParams = field()
    

@dataclass
class GetCommitteeCommitteeIDReportsResponse:
    content_type: str = field()
    status_code: int = field()
    committee_reports_page: Optional[shared.CommitteeReportsPage] = field(default=None)
    
