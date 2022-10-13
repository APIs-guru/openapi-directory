from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAuditCaseQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    audit_case_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'audit_case_id', 'style': 'form', 'explode': True }})
    audit_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'audit_id', 'style': 'form', 'explode': True }})
    candidate_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_id', 'style': 'form', 'explode': True }})
    committee_designation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'committee_designation', 'style': 'form', 'explode': True }})
    committee_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    committee_type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_type', 'style': 'form', 'explode': True }})
    cycle: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    max_election_cycle: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_election_cycle', 'style': 'form', 'explode': True }})
    min_election_cycle: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'min_election_cycle', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    primary_category_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'primary_category_id', 'style': 'form', 'explode': True }})
    q: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    qq: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'qq', 'style': 'form', 'explode': True }})
    sort: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    sub_category_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sub_category_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAuditCaseRequest:
    query_params: GetAuditCaseQueryParams = field(default=None)
    

@dataclass
class GetAuditCaseResponse:
    audit_case_page: Optional[shared.AuditCasePage] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
