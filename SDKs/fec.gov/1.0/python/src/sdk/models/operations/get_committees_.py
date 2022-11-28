from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetCommitteesCommitteeTypeEnum(str, Enum):
    UNKNOWN = ""
    C = "C"
    D = "D"
    E = "E"
    H = "H"
    I = "I"
    N = "N"
    O = "O"
    P = "P"
    Q = "Q"
    S = "S"
    U = "U"
    V = "V"
    W = "W"
    X = "X"
    Y = "Y"
    Z = "Z"

class GetCommitteesDesignationEnum(str, Enum):
    UNKNOWN = ""
    A = "A"
    J = "J"
    P = "P"
    U = "U"
    B = "B"
    D = "D"

class GetCommitteesFilingFrequencyEnum(str, Enum):
    UNKNOWN = ""
    A = "A"
    M = "M"
    N = "N"
    Q = "Q"
    T = "T"
    W = "W"
    MINUS_A = "-A"
    MINUS_T = "-T"

class GetCommitteesOrganizationTypeEnum(str, Enum):
    UNKNOWN = ""
    C = "C"
    L = "L"
    M = "M"
    T = "T"
    V = "V"
    W = "W"


@dataclass
class GetCommitteesQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    candidate_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_id', 'style': 'form', 'explode': True }})
    committee_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    committee_type: Optional[List[GetCommitteesCommitteeTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_type', 'style': 'form', 'explode': True }})
    cycle: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    designation: Optional[List[GetCommitteesDesignationEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'designation', 'style': 'form', 'explode': True }})
    filing_frequency: Optional[List[GetCommitteesFilingFrequencyEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'filing_frequency', 'style': 'form', 'explode': True }})
    max_first_file_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_first_file_date', 'style': 'form', 'explode': True }})
    max_last_f1_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_last_f1_date', 'style': 'form', 'explode': True }})
    min_first_file_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_first_file_date', 'style': 'form', 'explode': True }})
    min_last_f1_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_last_f1_date', 'style': 'form', 'explode': True }})
    organization_type: Optional[List[GetCommitteesOrganizationTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'organization_type', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    party: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'party', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    q: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    sponsor_candidate_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sponsor_candidate_id', 'style': 'form', 'explode': True }})
    state: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    treasurer_name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'treasurer_name', 'style': 'form', 'explode': True }})
    year: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCommitteesRequest:
    query_params: GetCommitteesQueryParams = field()
    

@dataclass
class GetCommitteesResponse:
    content_type: str = field()
    status_code: int = field()
    committee_page: Optional[shared.CommitteePage] = field(default=None)
    
