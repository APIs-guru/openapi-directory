from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposCompareCommitsPathParams:
    base: str = field(default=None, metadata={'path_param': { 'field_name': 'base', 'style': 'simple', 'explode': False }})
    head: str = field(default=None, metadata={'path_param': { 'field_name': 'head', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposCompareCommitsRequest:
    path_params: ReposCompareCommitsPathParams = field(default=None)
    

@dataclass
class ReposCompareCommitsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    commit_comparison: Optional[shared.CommitComparison] = field(default=None)
    
