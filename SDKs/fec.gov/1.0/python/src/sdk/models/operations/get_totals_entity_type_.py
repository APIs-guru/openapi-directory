from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetTotalsEntityTypeEntityTypeEnum(str, Enum):
    PRESIDENTIAL = "presidential"
    PAC = "pac"
    PARTY = "party"
    PAC_PARTY = "pac-party"
    HOUSE_SENATE = "house-senate"
    IE_ONLY = "ie-only"


@dataclass
class GetTotalsEntityTypePathParams:
    entity_type: GetTotalsEntityTypeEntityTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'entity_type', 'style': 'simple', 'explode': False }})
    
class GetTotalsEntityTypeFilingFrequencyEnum(str, Enum):
    UNKNOWN = ""
    A = "A"
    M = "M"
    N = "N"
    Q = "Q"
    T = "T"
    W = "W"
    MINUS_A = "-A"
    MINUS_T = "-T"

class GetTotalsEntityTypeOrganizationTypeEnum(str, Enum):
    UNKNOWN = ""
    C = "C"
    L = "L"
    M = "M"
    T = "T"
    V = "V"
    W = "W"


@dataclass
class GetTotalsEntityTypeQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    committee_designation: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_designation', 'style': 'form', 'explode': True }})
    committee_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    committee_state: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_state', 'style': 'form', 'explode': True }})
    committee_type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_type', 'style': 'form', 'explode': True }})
    cycle: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    filing_frequency: Optional[List[GetTotalsEntityTypeFilingFrequencyEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'filing_frequency', 'style': 'form', 'explode': True }})
    max_disbursements: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_disbursements', 'style': 'form', 'explode': True }})
    max_last_cash_on_hand_end_period: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_last_cash_on_hand_end_period', 'style': 'form', 'explode': True }})
    max_last_debts_owed_by_committee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_last_debts_owed_by_committee', 'style': 'form', 'explode': True }})
    max_receipts: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_receipts', 'style': 'form', 'explode': True }})
    min_disbursements: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_disbursements', 'style': 'form', 'explode': True }})
    min_last_cash_on_hand_end_period: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_last_cash_on_hand_end_period', 'style': 'form', 'explode': True }})
    min_last_debts_owed_by_committee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_last_debts_owed_by_committee', 'style': 'form', 'explode': True }})
    min_receipts: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min_receipts', 'style': 'form', 'explode': True }})
    organization_type: Optional[List[GetTotalsEntityTypeOrganizationTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'organization_type', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    sponsor_candidate_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sponsor_candidate_id', 'style': 'form', 'explode': True }})
    treasurer_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'treasurer_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTotalsEntityTypeRequest:
    path_params: GetTotalsEntityTypePathParams = field(default=None)
    query_params: GetTotalsEntityTypeQueryParams = field(default=None)
    

@dataclass
class GetTotalsEntityTypeResponse:
    committee_totals_page: Optional[shared.CommitteeTotalsPage] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
