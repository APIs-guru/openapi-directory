from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2GetClanWeeklyRewardStatePathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetClanWeeklyRewardStateRequest:
    path_params: Destiny2GetClanWeeklyRewardStatePathParams = field()
    

@dataclass
class Destiny2GetClanWeeklyRewardStateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
