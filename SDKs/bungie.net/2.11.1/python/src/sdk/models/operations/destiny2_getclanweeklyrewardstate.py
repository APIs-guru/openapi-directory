from dataclasses import dataclass, field



@dataclass
class Destiny2GetClanWeeklyRewardStatePathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetClanWeeklyRewardStateRequest:
    path_params: Destiny2GetClanWeeklyRewardStatePathParams = field(default=None)
    

@dataclass
class Destiny2GetClanWeeklyRewardStateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
