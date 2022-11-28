from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ReposGetPunchCardStatsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetPunchCardStatsRequest:
    path_params: ReposGetPunchCardStatsPathParams = field()
    

@dataclass
class ReposGetPunchCardStatsResponse:
    content_type: str = field()
    status_code: int = field()
    code_frequency_stats: Optional[List[List[int]]] = field(default=None)
    
