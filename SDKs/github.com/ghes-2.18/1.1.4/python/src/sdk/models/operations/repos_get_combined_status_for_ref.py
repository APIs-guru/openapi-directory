from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetCombinedStatusForRefPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetCombinedStatusForRefQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposGetCombinedStatusForRefRequest:
    path_params: ReposGetCombinedStatusForRefPathParams = field()
    query_params: ReposGetCombinedStatusForRefQueryParams = field()
    

@dataclass
class ReposGetCombinedStatusForRefResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    combined_commit_status: Optional[shared.CombinedCommitStatus] = field(default=None)
    
