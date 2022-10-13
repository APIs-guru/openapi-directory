from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetNamesAuditCandidatesQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    q: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNamesAuditCandidatesRequest:
    query_params: GetNamesAuditCandidatesQueryParams = field(default=None)
    

@dataclass
class GetNamesAuditCandidatesResponse:
    audit_candidate_search_list: Optional[shared.AuditCandidateSearchList] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
