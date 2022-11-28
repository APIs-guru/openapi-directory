from dataclasses import dataclass, field
from typing import Any,List,Optional
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
    repos_get_commit_activity_stats_202_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
