from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ReposGetContributorsStatsPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetContributorsStatsRequest:
    path_params: ReposGetContributorsStatsPathParams = field(default=None)
    

@dataclass
class ReposGetContributorsStatsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    contributor_activities: Optional[List[shared.ContributorActivity]] = field(default=None)
    repos_get_contributors_stats_202_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
