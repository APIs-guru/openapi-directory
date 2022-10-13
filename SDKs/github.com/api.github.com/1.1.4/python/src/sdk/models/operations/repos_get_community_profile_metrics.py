from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetCommunityProfileMetricsPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetCommunityProfileMetricsRequest:
    path_params: ReposGetCommunityProfileMetricsPathParams = field(default=None)
    

@dataclass
class ReposGetCommunityProfileMetricsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    community_profile: Optional[shared.CommunityProfile] = field(default=None)
    
