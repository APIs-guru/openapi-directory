from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ReposGetCodeFrequencyStatsPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetCodeFrequencyStatsRequest:
    path_params: ReposGetCodeFrequencyStatsPathParams = field(default=None)
    

@dataclass
class ReposGetCodeFrequencyStatsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    code_frequency_stats: Optional[List[List[int]]] = field(default=None)
    repos_get_code_frequency_stats_202_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
