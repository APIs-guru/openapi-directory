from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCandidateCandidateIDTotalsPathParams:
    candidate_id: str = field(default=None, metadata={'path_param': { 'field_name': 'candidate_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCandidateCandidateIDTotalsQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    cycle: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    election_full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'election_full', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCandidateCandidateIDTotalsRequest:
    path_params: GetCandidateCandidateIDTotalsPathParams = field(default=None)
    query_params: GetCandidateCandidateIDTotalsQueryParams = field(default=None)
    

@dataclass
class GetCandidateCandidateIDTotalsResponse:
    committee_totals_page: Optional[shared.CommitteeTotalsPage] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
