from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetParticipationStatsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetParticipationStatsRequest:
    path_params: ReposGetParticipationStatsPathParams = field()
    

@dataclass
class ReposGetParticipationStatsResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    participation_stats: Optional[shared.ParticipationStats] = field(default=None)
    
