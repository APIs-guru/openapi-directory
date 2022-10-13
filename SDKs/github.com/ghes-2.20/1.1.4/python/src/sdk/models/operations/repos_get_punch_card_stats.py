from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ReposGetPunchCardStatsPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetPunchCardStatsRequest:
    path_params: ReposGetPunchCardStatsPathParams = field(default=None)
    

@dataclass
class ReposGetPunchCardStatsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    code_frequency_stats: Optional[List[List[int]]] = field(default=None)
    
