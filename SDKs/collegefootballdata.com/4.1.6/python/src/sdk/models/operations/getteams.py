from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamsQueryParams:
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeamsRequest:
    query_params: GetTeamsQueryParams = field()
    

@dataclass
class GetTeamsResponse:
    content_type: str = field()
    status_code: int = field()
    teams: Optional[List[shared.Team]] = field(default=None)
    
