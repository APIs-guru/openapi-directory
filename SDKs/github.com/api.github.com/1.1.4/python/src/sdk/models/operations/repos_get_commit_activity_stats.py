from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReposGetCommitActivityStatsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetCommitActivityStatsRequest:
    path_params: ReposGetCommitActivityStatsPathParams = field()
    

@dataclass
class ReposGetCommitActivityStatsResponse:
    content_type: str = field()
    status_code: int = field()
    commit_activities: Optional[List[shared.CommitActivity]] = field(default=None)
    
