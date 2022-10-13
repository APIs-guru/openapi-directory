from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetCommitteeCommitteeIDCandidatesPathParams:
    committee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'committee_id', 'style': 'simple', 'explode': False }})
    
class GetCommitteeCommitteeIDCandidatesCandidateStatusEnum(str, Enum):
    UNKNOWN = ""
    C = "C"
    F = "F"
    N = "N"
    P = "P"

class GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnum(str, Enum):
    UNKNOWN = ""
    I = "I"
    C = "C"
    O = "O"

class GetCommitteeCommitteeIDCandidatesOfficeEnum(str, Enum):
    UNKNOWN = ""
    H = "H"
    S = "S"
    P = "P"


@dataclass
class GetCommitteeCommitteeIDCandidatesQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    candidate_status: Optional[List[GetCommitteeCommitteeIDCandidatesCandidateStatusEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_status', 'style': 'form', 'explode': True }})
    cycle: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    district: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'district', 'style': 'form', 'explode': True }})
    election_year: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'election_year', 'style': 'form', 'explode': True }})
    federal_funds_flag: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'federal_funds_flag', 'style': 'form', 'explode': True }})
    has_raised_funds: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'has_raised_funds', 'style': 'form', 'explode': True }})
    incumbent_challenge: Optional[List[GetCommitteeCommitteeIDCandidatesIncumbentChallengeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'incumbent_challenge', 'style': 'form', 'explode': True }})
    name: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    office: Optional[List[GetCommitteeCommitteeIDCandidatesOfficeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    party: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'party', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    state: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCommitteeCommitteeIDCandidatesRequest:
    path_params: GetCommitteeCommitteeIDCandidatesPathParams = field(default=None)
    query_params: GetCommitteeCommitteeIDCandidatesQueryParams = field(default=None)
    

@dataclass
class GetCommitteeCommitteeIDCandidatesResponse:
    candidate_detail_page: Optional[shared.CandidateDetailPage] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
