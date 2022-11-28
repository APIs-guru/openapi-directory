from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetCommitteeCommitteeIDCandidatesHistoryPathParams:
    committee_id: str = field(metadata={'path_param': { 'field_name': 'committee_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCommitteeCommitteeIDCandidatesHistoryQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    election_full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'election_full', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCommitteeCommitteeIDCandidatesHistoryRequest:
    path_params: GetCommitteeCommitteeIDCandidatesHistoryPathParams = field()
    query_params: GetCommitteeCommitteeIDCandidatesHistoryQueryParams = field()
    

@dataclass
class GetCommitteeCommitteeIDCandidatesHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    candidate_history_page: Optional[shared.CandidateHistoryPage] = field(default=None)
    
