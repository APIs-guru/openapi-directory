from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetFbsTeamsQueryParams:
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFbsTeamsRequest:
    query_params: GetFbsTeamsQueryParams = field(default=None)
    

@dataclass
class GetFbsTeamsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    teams: Optional[List[shared.Team]] = field(default=None)
    
