from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetNamesAuditCandidatesQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    q: List[str] = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNamesAuditCandidatesRequest:
    query_params: GetNamesAuditCandidatesQueryParams = field()
    

@dataclass
class GetNamesAuditCandidatesResponse:
    content_type: str = field()
    status_code: int = field()
    audit_candidate_search_list: Optional[shared.AuditCandidateSearchList] = field(default=None)
    
