from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRosterQueryParams:
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRosterRequest:
    query_params: GetRosterQueryParams = field(default=None)
    

@dataclass
class GetRosterResponse:
    content_type: str = field(default=None)
    players: Optional[List[shared.Player]] = field(default=None)
    status_code: int = field(default=None)
    
