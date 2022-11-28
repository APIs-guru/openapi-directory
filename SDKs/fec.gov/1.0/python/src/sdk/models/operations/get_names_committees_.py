from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetNamesCommitteesQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    q: List[str] = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNamesCommitteesRequest:
    query_params: GetNamesCommitteesQueryParams = field()
    

@dataclass
class GetNamesCommitteesResponse:
    content_type: str = field()
    status_code: int = field()
    committee_search_list: Optional[shared.CommitteeSearchList] = field(default=None)
    
