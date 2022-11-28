from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetCandidatesSearchCandidateStatusEnum(str, Enum):
    UNKNOWN = ""
    C = "C"
    F = "F"
    N = "N"
    P = "P"

class GetCandidatesSearchIncumbentChallengeEnum(str, Enum):
    UNKNOWN = ""
    I = "I"
    C = "C"
    O = "O"

class GetCandidatesSearchOfficeEnum(str, Enum):
    UNKNOWN = ""
    H = "H"
    S = "S"
    P = "P"


@dataclass
class GetCandidatesSearchQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    candidate_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_id', 'style': 'form', 'explode': True }})
    candidate_status: Optional[List[GetCandidatesSearchCandidateStatusEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_status', 'style': 'form', 'explode': True }})
    cycle: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    district: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'district', 'style': 'form', 'explode': True }})
    election_year: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'election_year', 'style': 'form', 'explode': True }})
    federal_funds_flag: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'federal_funds_flag', 'style': 'form', 'explode': True }})
    has_raised_funds: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'has_raised_funds', 'style': 'form', 'explode': True }})
    incumbent_challenge: Optional[List[GetCandidatesSearchIncumbentChallengeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'incumbent_challenge', 'style': 'form', 'explode': True }})
    is_active_candidate: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_active_candidate', 'style': 'form', 'explode': True }})
    max_first_file_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_first_file_date', 'style': 'form', 'explode': True }})
    min_first_file_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_first_file_date', 'style': 'form', 'explode': True }})
    name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    office: Optional[List[GetCandidatesSearchOfficeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    party: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'party', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    q: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    state: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCandidatesSearchRequest:
    query_params: GetCandidatesSearchQueryParams = field()
    

@dataclass
class GetCandidatesSearchResponse:
    content_type: str = field()
    status_code: int = field()
    candidate_page: Optional[shared.CandidatePage] = field(default=None)
    
