from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetCandidateCandidateIDCommitteesHistoryCyclePathParams:
    candidate_id: str = field(metadata={'path_param': { 'field_name': 'candidate_id', 'style': 'simple', 'explode': False }})
    cycle: int = field(metadata={'path_param': { 'field_name': 'cycle', 'style': 'simple', 'explode': False }})
    
class GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnum(str, Enum):
    UNKNOWN = ""
    A = "A"
    J = "J"
    P = "P"
    U = "U"
    B = "B"
    D = "D"


@dataclass
class GetCandidateCandidateIDCommitteesHistoryCycleQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    designation: Optional[List[GetCandidateCandidateIDCommitteesHistoryCycleDesignationEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'designation', 'style': 'form', 'explode': True }})
    election_full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'election_full', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCandidateCandidateIDCommitteesHistoryCycleRequest:
    path_params: GetCandidateCandidateIDCommitteesHistoryCyclePathParams = field()
    query_params: GetCandidateCandidateIDCommitteesHistoryCycleQueryParams = field()
    

@dataclass
class GetCandidateCandidateIDCommitteesHistoryCycleResponse:
    content_type: str = field()
    status_code: int = field()
    committee_history_page: Optional[shared.CommitteeHistoryPage] = field(default=None)
    
