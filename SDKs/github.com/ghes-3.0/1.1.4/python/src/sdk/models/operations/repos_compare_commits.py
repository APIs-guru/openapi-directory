from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposCompareCommitsPathParams:
    basehead: str = field(metadata={'path_param': { 'field_name': 'basehead', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposCompareCommitsRequest:
    path_params: ReposCompareCommitsPathParams = field()
    

@dataclass
class ReposCompareCommitsResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    commit_comparison: Optional[shared.CommitComparison] = field(default=None)
    
