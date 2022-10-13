from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetNamesCandidatesQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    q: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNamesCandidatesRequest:
    query_params: GetNamesCandidatesQueryParams = field(default=None)
    

@dataclass
class GetNamesCandidatesResponse:
    candidate_search_list: Optional[shared.CandidateSearchList] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
