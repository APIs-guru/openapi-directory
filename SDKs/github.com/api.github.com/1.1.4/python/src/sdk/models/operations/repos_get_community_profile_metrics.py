from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetCommunityProfileMetricsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetCommunityProfileMetricsRequest:
    path_params: ReposGetCommunityProfileMetricsPathParams = field()
    

@dataclass
class ReposGetCommunityProfileMetricsResponse:
    content_type: str = field()
    status_code: int = field()
    community_profile: Optional[shared.CommunityProfile] = field(default=None)
    
